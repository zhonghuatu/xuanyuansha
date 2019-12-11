'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'xys',
		connect:true,
		character:{
			xy_yaohan:['male','qun',4,['xy_chewang','xy_chewei']],
			xy_baohan:['male','wei',3,['xy_fengxiong']],
		},
		characterTitle:{
			xy_yaohan:'#b�Ű¿�С˵',	
			xy_baohan:'#r������',
		},
		skill:{
			xy_chewang:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(target.isTurnedOver()){
							if(!(card.name=='sha'||card.name=='tao'||card.name=='jiu'||card.name=='juedou')) return false;
						}
					}
				},
			},
			xy_chewei:{
				audio:'jushou',
				trigger:{player:'phaseJieshuBegin'},
				content:function(){
					'step 0'
					player.draw(3);
					'step 1'
					player.chooseCard('h',true,'��ѡ��һ�����Ʋ�����֮������ѡ����һ��װ�������Ϊװ��֮��').set('ai',function(card){
						if(get.type(card)=='equip'){
							return 5-get.value(card);
						}
						return -get.value(card);
					}).set('filterCard',lib.filter.cardDiscardable);
					'step 2'
					if(result.bool&&result.cards.length){
						if(get.type(result.cards[0])=='equip'&&!player.isDisabled(get.subtype(result.cards[0]))){
							player.chooseUseTarget(result.cards[0],true,'nopopup');
						}
						else{
							player.discard(result.cards[0]);
						}
					}
					'step 3'
					player.turnOver();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=='guiyoujie') return [0,1];
						}
					}
				},
			},
			xy_fengxiong:{
				
			}
		},
		translate:{
			xy_yaohan:"Ҧ��",
			xy_baohan:"����",
			
			xy_chewang:"����",
			xy_chewang_info:"���������㴦�ڷ���״̬ʱ�����ˡ�ɱ�����������������ҡ������ơ����⣬�㲻�ܱ���ָ��ΪĿ�ꡣ",
			xy_chewei:"��λ",
			xy_chewei_info:"�����׶Σ�����Ի�������Ʋ�����һ�����ƣ�����ѡ����һ��װ���ƣ����Ϊʹ��֮��Ȼ���㽫����佫�Ʒ��档",
		},
	};
});
