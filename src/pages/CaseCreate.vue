<template>
    <div class="case-creator-page">

        <div class="container">

            <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>

            <div class="board-title casedrop">Create your own case</div>

            <div class="block-wrapper case-name">
                <div class="block-title">Enter Case Name</div>
                <form action="/">
                    <div class="input-container">
                        <input type="text" class="custom-input" placeholder="Case Name" v-model="post.name">
                    </div>
                </form>
            </div>

            <div class="block-wrapper case-picture">
                <div class="block-title">Choose Case Picture</div>

                <Loader v-if="loadBack"></Loader>

                <slick
                    v-else
                    class="choose-case-picture-wrapper"
                    ref="slick"
                    :options="slickOptions"
                >
                    <div class="weapon-item radio-weapon-item" 
                        v-for="item in background"
                        :key="item.id"
                        >
                        <label>
                            <div class="weapon-item-header">
                                <div class="custom-radio-block">
                                    <input type="radio" name="case-pucture" :value="item.id" v-model="post.icon_back">
                                    <div class="white-circle"></div>
                                    <div class="gradient-circle"></div>
                                    <div class="small-circle"></div>
                                    <div class="point-circle"></div>
                                </div>
                            </div>
                            <div class="gradient-item-img">
                                <img :src="`${url}${item.icon}`" :alt="item.id">
                            </div>
                        </label>
                    </div>
                </slick>

            </div>
            <!--end block wrapper-->

            <div class="block-wrapper case-name">
                <div class="block-title">Add Skins</div>
                <Loader v-if="loadItem"></Loader>

                <div v-else class="sort-items-wrapper">
                    <div class="blur-overlay" v-if="showOverlay"></div>
                    <!-- <div v-else >  -->
                    <div class="sort-items-header">
                         <div class="sort-item search-item">
                             <form>
                                 <div class="input-container">
                                     <input 
                                        type="text" 
                                        class="custom-input" 
                                        placeholder="Case Name"
                                        v-model="search"
                                        @input="searchItem"
                                        ref="search"
                                        id="search"
                                    >
                                     <button type="submit" class="search-btn" @click.prevent="searchItem"><span class="icon2 drop2-search"></span></button>
                                 </div>
                             </form>
                         </div>
                        <div class="sort-item all-weapon">
                            <div class="custom-dropdown" :class="showSortByType ? 'show' : ''">
                                <div class="dropdown-title" @click="showSortByType = true">
                                    {{ typeWeaponValue }}
                                </div>
                                <div class="dropdown-list">
                                    <div class="dropdown-triangle"></div>
                                    <div 
                                        class="dropdown-list-item"
                                        v-for="item in typeWeapon"
                                        :key="item.name"
                                        @click="[sortData('weapon_type', item), showSortByType = !showSortByType]"
                                        >{{ item.name }}</div>

                                </div>
                            </div>
                        </div>
                        <!-- /.sort-item -->
                        <div class="sort-item rarity-sort">
                            <div class="custom-dropdown" :class="showSortByRate ? 'show' : ''">
                                <div class="dropdown-title" @click="showSortByRate = true">
                                    <span class="rarity-item">
                                        {{ rarityValue }}
                                    </span>
                                </div>
                                <div class="dropdown-list">
                                    <div 
                                        class="dropdown-list-item"
                                        v-for="item in rarity"
                                        :key="item.name"
                                        @click="[sortData('rarity', item), showSortByRate = !showSortByRate]"
                                        >
                                        <span class="rarity-item" :class="item.value" :style="`color: #${item.color}`">{{ item.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.sort-item -->
                        <div class="sort-item cost-sort">
                            <div 
                                class="sort-btn" 
                                :class="sortToggle ? 'down' : ''"
                                @click="sortData('cost')"
                            >Sort By Cost</div>
                        </div>
                        <!-- /.sort-item -->
                        <div class="sort-item name-sort">
                            <div 
                                class="sort-btn" 
                                :class="sortToggle1 ? 'down' : ''"
                                @click="sortData('name')"
                            >Sort By Name</div>
                        </div>
                        <!-- /.sort-item -->
                    </div>
                    <!--end sort-items-header-->
                    <div class="sort-items-body">
                        <div class="board-content-wrapper body-items">
                            <vue-scrollbar classes="my-scrollbar" speed="20" ref="Scrollbar">
                                <div class="scroll-me">
                                <div class="weapon-item-empty" v-if="weaponsItem.length == 0">No search result</div>
                                <div 
                                    v-else
                                    class="weapon-item check-weapon-item" 
                                    v-for="item in weaponsItem" 
                                    :key="item.item_id"
                                    >
                                    <label>
                                        <div class="weapon-item-header">
                                            <div class="custom-checkbox-block">
                                                <input type="checkbox" name="case-pucture" :value="item" v-model="checkboxItems">
                                                <div class="check-bg"></div>
                                            </div>
                                            <div class="price"> {{ item.price }} </div>
                                        </div>
                                        <div class="weapon-default__bg-wrapper" 
                                            :class="`weapon-default--${item.rarity}`">
                                            <div class="weapon-default__circle"></div>
                                            <div  v-for="(item, i) in 4" 
                                                class="weapon-default__bg" :key="i" 
                                                :class="`weapon-default__bg--${i + 1}`">
                                            </div>
                                        </div>
                                        <div class="gradient-item-img">
                                            <img :src="item.image" :alt="item.name">
                                        </div>
                                        <div class="full-weapon-name">
                                            <div>{{ item.type }}</div>
                                            <div class="full-weapon-name__second" :title="compactTitle(item.name, item.quality_trans)">{{ item.name }} ({{ item.quality_trans }})</div>
                                        </div>
                                    </label>
                                </div>
                                </div>
                            </vue-scrollbar>
                        </div>
                        <!-- /.sort-items-body -->
                    </div>
                    <!-- </div>  -->
                </div>

            </div>
            <!--end block wrapper-->
            
            <div class="block-wrapper case-name">
                <div class="block-title">Your tax</div>
                <VueSlideBar 
                    :data="sliderWithLabel.data"
                  :range="sliderWithLabel.range"
                  @callbackRange="callbackRange">
                </VueSlideBar>
                
          
            </div>

            <div class="block-wrapper">
                <div class="block-title" > Choose Odds {{sumaChancess}}</div>

                <div class="odds-block">
                    <SelectedItem :change='checkboxItems' 
                        v-for="item in checkboxItems"
                        :key="item.item_id" 
                        :item="item"
                        :class="post.icon_front == item.item_id ? 'selected' : ''"
                        :totalOdds="totalOdds"
                        :propChance="sumaChance" 
                        @setIconFront="setIconFront"
                        @deleteFromCase="deleteFromCase"
                        @calcTotalPrice="calcTotalPrice"
                        @changeChance="changeChance22"
                        @sumaChance="sumaChances"
                        @plusPrise="plusPrise"
                        @priceTotal="priceTotal"
                    />
                    <!-- /.odds-row -->

                    <div class="odd-info">
                        <div class="odd-case-price">
                            <span>Case price: </span>
                            <span>${{ (pricePlus + userTaxAll).toFixed(2) }}</span>
                        </div>

                        <div class="odd-total">
                            <span>Total odds: </span>
                            <span>{{ totalOdds2 }}%</span>
                        </div>
                        <div class="form-btn-loader">
                            <Loader :size="25" :full-row="false" v-if="waitCreate"></Loader>
                            <button v-else class="gradient-btn create-case-btn" :class=" disableBtn ? 'btn-disable' : '' " @click.prevent="create">Create case</button>
                        </div>
                    </div>

                </div>
                <!--end odds block-->

            </div>

        </div><!--end container-->

    </div>
    <!--end case creaor page-->
</template>


<script>
import ApiCase from '@/api/case';
import Slick from 'vue-slick';
import constants from '@/constants';
import _ from 'lodash'
import VueSlideBar from 'vue-slide-bar'
import VueScrollbar from 'vue2-scrollbar';
// require("vue2-scrollbar/style/vue2-scrollbar.css")
let file = require('@/assets/json/sort.json')
export default {
    data() {
        return {
            background: [],
            weaponsItem: [],
            sort: {},
            breadcrumbs: ['Case create', 'Casedrop.com'],
            search: '',
            url: constants.imgUrl,
            totalPrice: 0,
            masPrice: {},
            userTaxAll: 0,
            userTaxNum: 0,
            totalOdds2: 0,
            pricePlus: 0,
            totalPriseScrin: 0,
            sliderWithLabel: {
                value: 1,
                data: [
                  0, 1, 2, 3
                ],
                range: [
                  { label: '0 %' },
                  { label: '1 %' },
                  { label: '2 %' },
                  { label: '3 %' },
                ],
            },
            sumaChancess: '',  
            sumaChance: '',
            loadItem: true,
            loadBack: true,
            showOverlay: false,
            showSortByRate: false,
            showSortByType: false,
            sortToggle: true,
            sortToggle1: true,
            waitCreate: false,
            checkboxItems: [],
            post: {
                icon_back: 0,
                icon_front: 0,
                items: [],
                name: '',
                usertax: 0
            },
            rarity: file.rate,
            typeWeapon: file.type,
            rarityValue: 'Any Skin Rarity',
            typeWeaponValue: 'All Weapons',
            slickOptions: {
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                lastPrise: {
                    id: 0,
                    priced: 0
                },
                responsive: [
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 1250,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 740,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            },
        }
    },
    watch: {
        'totalOdds' : function(newValue) {
            if (newValue == 100) {

            }
        },
        'checkboxItems' : function(newValue, oldValue) {
            this.recordItem(newValue)
            this.calcTotalPrice()
        },
        'totalPrice': function(value) {
            this.totalPrice = Math.round(value * 100) / 100
            
        },
        'pricePlus': function(){
            this.userTaxAll = this.pricePlus / 100 * this.userTaxNum
        }
    },
    computed: {
        disableBtn() {
            return (this.checkboxItems.length >= 2) && (this.totalOdds2 == 100) ? false : true
        }
    },
    components: { 
        Slick, VueSlideBar, VueScrollbar,
        Loader: () => import('@/components/common/Loader'),
        Breadcrumbs: () => import('@/components/partials/Breadcrumbs'),
        SelectedItem: () => import('@/components/CaseCreate/SelectedItem')
    },
    methods: {
        compactTitle(name, name2) {
            return `${name} (${name2})`
        },
        setIconFront(id) {
            this.post.icon_front = id
        },
        priceTotal(id, price){
            let mas = this.masPrice.id = price
            console.log('masPrice: '+ mas) 
        },
        sumaChances(value) {
            let element = document.querySelectorAll(".chance-class")
            let elements = 0
            let sum
            for (var i = 0; i < element.length; i++) {
            elements += parseFloat(element[i].value)
            this.totalOdds2 = elements.toFixed(2)
            }
            //console.log (elements + " 1111111")
            if (elements > 100){
                sum = value + 100 - elements
                this.totalOdds2 = 100
            }
            this.sumaChance = sum
        },
        plusPrise (plus){
            console.log('22222 ' + plus )
            this.totalPrice += plus
        },
        callbackRange (val) {
            this.post.usertax = val.label
            console.log('usertax: ' + this.post.usertax)
            let str = String(val.label)
            str = str[0]
            console.log(str)
            this.userTaxNum = parseInt(str)
            let totalTax = this.pricePlus / 100 * this.userTaxNum
            console.log('Tax ' + totalTax)
            this.userTaxAll = totalTax 

        },
        recordItem(value) {
            this.post.items = []
            _.forEach(value, (item) => {
                this.post.items.push(
                    {
                        id: item.item_id,
                        chance: 0
                    }
                )
            })
        },
        changeChance(id, value, price, char) {
            let a = 0
            _.forEach(this.post.items, (item) => {
                if ( item.id == id ) {
                    item.chance = value
                }
                return a += item.chance
            })
            let check = true
            console.log('totalPrice: ' + this.totalPrice)
            if (char) {
                    if (check){
                    this.totalPrice += parseFloat(price)
                    Math.round(this.totalPrice * 100) / 100
                    check = !check
                    console.log('totalPrice: ' + this.totalPrice + 'price: ' + price + 'check:' + check)
                    
                    }
            } else {
                if (price != 0) {
                    this.totalPrice -= Number(price)
                } else {
                    this.calcTotalPrice()
                }
            }
            if (a <= 100) {
                this.totalOdds = a
            } else {
                // alert('Odds most be low 100')
            }
        },
         changeChance22(){
            let that = this
            setTimeout(that.changeChance21, 500)
         },
        changeChance21(id, value, price, char) {
            let a = 0
            _.forEach(this.post.items, (item) => {
                if ( item.id == id ) {
                    item.chance = value
                }
                return a += item.chance
            })
             let element = document.querySelectorAll("#pricep")
            let elements = 0
            let plus = 0
            this.pricePlus = 0
            //let triger = false
            //let sum
            for (var i = 0; i < element.length; i++) {
             console.log('55555' + element[i])   
            elements += element[i].innerHTML }
            console.log('innerHTML2 ' + elements + '')
            elements = elements.split('$ ')
            for (var i = 0; elements.length > i; i++){
                //возможно нужно будeт добавить /2
                this.pricePlus += parseFloat(elements[i])
                //console.log(typeOf(this.pricePlus) + 123456)
                this.pricePlus = Math.round((this.pricePlus)*100)/100
            }
            //this.totalOdds2 = pricePlus
           
            //console.log('66666' + this.pricePlus + 'this.totalPrice: ' + totalPrice)
            //for (var i = Things.length - 1; i >= 0; i--) {
            //     Things[i]
            // } this.lastPrise

            if (char) {
                if (this.totalOdds <= 100) {
                    this.totalPrice += Number(price)

                    Math.round(this.totalPrice * 100) / 100
                    //this.totalPriseScrin = this.totalPrice + Number(price)
                    console.log (this.totalPrice)
                    
                }
            } else {
                if (price != 0) {
                    this.totalPriseScrin = this.totalPrice - Number(price)
                } else {
                    this.totalPriseScrin = this.calcTotalPrice()
                }
            }
            if (a <= 100) {
                this.totalOdds = a
            } else {
                // alert('Odds most be low 100')
            }
        },
        searchItem: _.debounce(function() {
            document.getElementById('search').blur()
            this.showOverlay = true
            let search = new Object();

            search['name'] = this.search
            ApiCase.searchItems( Object.assign(search, this.sort) )
                .then( ( response ) => {
                    this.weaponsItem = response.data.data
                    setTimeout( () => {
                        this.showOverlay = false
                    }, 500)
                })
                .catch( ( error ) => {
                    console.log( error )
                })
        }, 700),
        deleteFromCase(id) {
            this.checkboxItems = _.remove(this.checkboxItems, (item) => {
                return item.item_id != id
            })
            this.post.items = _.remove(this.post.items, (item) => {
                return item.id != id
            })
            this.calcTotalPrice()
        },
        calcTotalPrice() {
            let a = 0
            _.forEach(this.checkboxItems, (item) => {
                return a += item.price
            })
            this.totalPrice = Math.round(a * 100) / 100

        },
        sortData(type, item) {
            this.showOverlay = true
            let direction = 'desc'
            let direction1 = 'desc'

            let search = new Object();
                search['name'] = this.search

            if ( this.sortToggle ) {
                direction = 'asc'
            }

            if ( this.sortToggle1 ) {
                direction1 = 'asc'
            }
                
            if ( type == 'cost' ) {
                this.sortToggle = !this.sortToggle
                this.sort['price_sort'] = direction
            } else if ( type == 'name' ) {
                this.sort['name_sort'] = direction1
                this.sortToggle1 = !this.sortToggle1
            } else if ( type == 'rarity' ) {
                this.sort['rarity'] = item.value
                this.rarityValue = item.name
            } else if ( type == 'weapon_type' ) {
                this.sort['weapon_type'] = item.value
                this.typeWeaponValue = item.name
            }

            ApiCase.filterItems(Object.assign(search, this.sort))
                .then( ( response ) => {
                    console.log( response.data.data )
                    if ( response.data.result ) {
                        this.weaponsItem = response.data.data
                        setTimeout( () => {
                            this.showOverlay = false
                        }, 500)
                    }
                })
                .catch( ( error ) => {
                    console.log( error )
                })
        },
        create() {
            if (!this.disableBtn) {

                this.waitCreate = true
                let temp = this.post.usertax.replace(' %', '')
                this.post.usertax = Number(temp) / 100
    
                ApiCase.createCase( this.post )
                    .then( (response) => {
                        this.waitCreate = false
                        console.log( response )
                    })
            }
        },
        documentClick(e){
            // let el = this.$refs.date
            // let target = e.target
            // if (( el !== target) && !el.contains(target)) {
            //     this.showSortByRate = false
            //     this.showSortByType = false
            // }

        },
    },
    beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        this.$nextTick(function () {
            if (this.$refs.slick) {
                this.$refs.slick.create(this.slickOptions);
            }
        });
    },
    destroyed () {
        document.removeEventListener('click', this.documentClick)
    },
    created() {
        document.addEventListener('click', this.documentClick)
        ApiCase.getBackground()
            .then( ( response ) => {
                if ( response.data.result ) {
                    this.background = response.data.back_icons
                    setTimeout( () => {
                        this.loadBack = false
                    }, 500)

                }
                console.log(response.data)
            })
            .catch( ( error ) => {
                console.log( error )
            })
        ApiCase.getItem()
            .then( ( response ) => {
                if ( response.data.result ) {
                    console.log(response.data.data)
                    this.weaponsItem = response.data.data
                    setTimeout( () => {
                        this.loadItem = false
                    }, 500)
                    console.log(response.data)
                }
            })
            .catch( ( error ) => {
                console.log( error )
            })
    }
}
</script>

<style lang="scss">
@import '@/assets/style/components/_scroll.scss';

.blur-overlay {
    position: absolute;
    top: -1%;
    left: -1%;
    width: 102%;
    height: 102%;
    background: rgba(20, 19, 29, 0.8);
    opacity: .8;
    // filter: blur(2px);
    z-index: 1000;
}

.case-name .sort-items-wrapper {
    min-height: 600px;
    position: relative;
}

.slick-slide > div {
    margin: 0 10px 0;
}
.vue-slide-bar-tooltip {
    border-color: #7568e7 !important
}
.vue-slide-bar-process,
.vue-slide-bar-tooltip {
    background: #7568e7 !important
}

.btn-disable {
    background: #332f3d;
}

.form-btn-loader {
    margin-left: 10px;
    min-width: 185px;
}

.weapon-item-empty {
    margin: 50px auto;
}

.board-content-wrapper {
    margin: 0 !important
}
</style>
