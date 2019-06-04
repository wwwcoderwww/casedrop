<template>
<div class="odds-row" @click="$emit('setIconFront', item.item_id)">
    <div class="left-block">
        <div class="odd-img">
            <div class="weapon-item">
                <div class="weapon-default__bg-wrapper"
                     :class="`weapon-default--${item.rarity}`">
                    <div class="weapon-default__circle"></div>
                    <div class="weapon-default__bg weapon-default__bg--1"></div>
                    <div class="weapon-default__bg weapon-default__bg--2"></div>
                    <div class="weapon-default__bg weapon-default__bg--3"></div>
                    <div class="weapon-default__bg weapon-default__bg--4"></div>
                </div>
                <div class="gradient-item-img">
                    <img :src="item.image" :alt="item.item_id">
                </div>
            </div>
        </div>
        <div class="odd-name">{{ item.name }}</div>
    </div>

    <div class="right-block">
        <div class="odd-price">$ {{ item.price }} </div>

        <div class="odd-plus">+ <span id="pricep">$ {{ price }}</span></div>

        <div class="custom-counter">
            <div class="input-wrap">
                <input type="text" step=0.01 value="0" class="chance-class" @input="sumaChances" v-model.number.trim="chance">
            </div>
            <div class="counter-btns">
                <div class="counter-btn-plus" @click="changePercentUp(item.item_id)">
                    <span class="icon2 drop2-keyboard_arrow_up"></span>
                </div>
                <div class="counter-btn-minus" @click="changePercentDown(item.item_id)">
                    <span class="icon2 drop2-keyboard_arrow_down"></span>
                </div>
            </div>
        </div>
        <div class="odd-delete" @click="$emit('deleteFromCase', item.item_id)">
            <span class="icon2 drop2-trash"></span>
        </div>
    </div>
</div>
</template>

<script>
import { validation } from "@/mixin/validation";

export default {
    props: ['item', 'totalOdds', 'change', 'propChance'],
    data() {
        return {
            chance: 0,
            price: 0,
            step: 0.01,
            total: 0,
            id: 0,
            value: 0
        }
    },
    mixins: [validation],
    watch: {
        'totalOdds': function(value, newValue, oldValue) {
            //this.value = value
            //if ( value > 100 ) {
             //   this.changePercentDown(this.id)
            //}
        },
         'chance': function(value, newValue, oldValue) {
             this.chance = String(this.chance)
             this.chance.replace(/,/, '.')
             this.chance = this.numberValidator(this.chance, (data) => {
                 return this.twoCharAfterDot(data)
             })
             this.chance.replace(/,/, '.')
             this.checkChance()
             this.$emit("changeChance", this.id, this.chance, this.price, true)
         }
    },
    methods: {
        sumaChances() {
           this.$emit('sumaChance', this.chance) 
           this.calcPrice()
           this.$emit("changeChance", id, this.chance, this.price, false)
            },
        calcPrice() {
            let temp = 0
            temp = (this.item.price * this.chance) / 100
            this.price = temp.toFixed(2)
        },
        checkChance(){            
           if (this.propChance >= 0 ) 
           this.chance = this.propChance.toFixed(2)
       	   this.chance = parseFloat(this.chance)
           this.calcPrice()
           this.$emit("priceTotal", this.id, this.price)
        },
        changePercentUp(){
        	this.$emit('sumaChance', this.chance)
            this.chance = parseFloat(this.chance)
            this.chance += 0.01
        },
        changePercentDown(){
        	this.$emit('sumaChance', this.chance)
            this.chance = parseFloat(this.chance)
            if (this.chance > 0){
                this.chance -= 0.01
            }
            else this.chance = 0   
        }
       
    }
}
</script>
