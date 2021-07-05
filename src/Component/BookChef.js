import React, { Component } from 'react'
import './bookChef.css'
import { Modal, Button } from "react-bootstrap";
import  MultiSelectReact  from 'multi-select-react';
// import { Col, Form } from "react-bootstrap";
import data from './data.json';
import newdata from './newdata.json'
// import 'bootstrap'

// import * as $ from 'jquery';
// window['jQuery'] = window['$'] = $;

declare var $ : any;
// import $ from "jquery";

export default class BookChef extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            appetizer:[],
            boolean:true,
            data:[newdata.Sheet1],
            mainCourse:[],
            date:'',
            dessert:[],
            breadRice:[],
            mobileno:"",
            email:"",
            dessertClassname:"caterNinja_add_dessert_button", 
            showDessert:false,
            totalMainCoursePrice:0,
            totalAppeticerPrice:0,
            totalDessertPrice:0,
            totalBreadRicePrice:0
          }

    //       optionClicked(optionsList) {
    //         this.setState({ multiSelect: optionsList });
    //   }
    //   selectedBadgeClicked(optionsList) {
    //         this.setState({ multiSelect: optionsList });
    //   }
}



componentDidMount(){
    // $(document).ready(function() {
        // $('select').val([1]);
        // window.$('select').formSelect();
            // $('select').formSelect();
            // $('select.select_all').siblings('ul').prepend('<li id=sm_select_all><span>Select All</span></li>');
            // $('li#sm_select_all').on('click', function () {
            //   var jq_elem = $(this), 
            //       jq_elem_span = jq_elem.find('span'),
            //       select_all = jq_elem_span.text() === 'Select All',
            //       set_text = select_all ? 'Select None' : 'Select All';
            //   jq_elem_span.text(set_text);
            //   jq_elem.siblings('li').filter(function() {
            //     return $(this).find('input').prop('checked') !== select_all;
            //   }).click();
            // });
        // })

        // var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        //     removeItemButton: true,
        //     maxItemCount:3,
        //     searchResultLimit:5,
        //     renderChoiceLimit:5
        //     });
        console.log(this.state.data)
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    this.setState({
        todaysDate : [year, month, day].join('-'),
        data : this.state.data[0].filter(element => {
            if(element.label.includes("price")){
                return element.label
            }else if(element.quantity === "kg"){

                return element.label = `${element.label + "     price : " + element.price + " / " + element.quantity}`
            }
            return element.label = `${element.label + "     price : " + element.price + " / dozon"}`
        })
    })

    
    }

    
    openModal = () => this.setState({ isOpen1: true });
    closeModal = () => {
        window.location.reload();
        this.setState({ 
        isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            appetizer:[],
            boolean:true,
            data:[newdata.Sheet1],
            mainCourse:[],
            date:'',
            dessert:[],
            totalMainCoursePrice:0,
            totalAppeticerPrice:0,
            totalDessertPrice:0,
            // isOpen1: false,
            // isOpen2: false,
            // isOpen3:false,
            // isOpen4:false,
            occasion:'',
            people:0,
            meal:'',
            cuisine:'',
            preference:'',
            mealtype:'',
            // appetizer:[],
            // boolean:false,
            // data:[newdata.Sheet1],
            // mainCourse:[],
            // date:'',
            // dessert:[],
            city:''
        });
    }
    nextonetotwo = () => {
        if(!this.state.city){
            alert("please select city")
        }else if(!this.state.occasion){
            alert("please select occasion")
        }else if(!this.state.people){
            alert("please select people")
        }else if(!this.state.date){
            alert("please select date")
        }else if(!this.state.meal){
            alert("please select meal")
        }else{
            // if(this.state.meal === "Lunch and dinner"){
                this.setState({ 
                                isOpen1: false,
                                isOpen2: true,
                            })
            // }else{
                // this.setState({ 
                //     isOpen1: false,
                //     isOpen2: true,
                // })
            // }
        }
                        };
    nexttwotothree = () => {                 

                            // start
                           if(!this.state.cuisine){
                                alert("please select Cuisine")
                           }else if(!this.state.preference){
                                alert("please select Preference")
                           }else if(!this.state.mealtype){
                                alert("please select Meal Type")
                           }else{

                            this.setState({
                                isOpen2: false,
                                isOpen3: true,
                                breadRice:this.state.data.filter(element => {
                                    return (element.mealsubtype === "Rice" || element.mealsubtype === "Breads")
                                }),
                            })

                            

                            // if(this.state.cuisine === "Indian & Chinese")

                            if(this.state.mealtype === "Starter"){
                                if(this.state.preference === "veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else{
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }
                                    console.log("1if 1if")
                                    console.log(this.state)
                                }else if(this.state.preference === "non_veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else{
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }
                                    console.log("1if 2if")
                                    console.log(this.state)
                                }else{
                                    if(this.state.cuisine === "Indian & Chinese"){

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }else{

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:[]
                                        })
                                    }
                                    console.log("1if 3if")
                                    console.log(this.state)
                                }
                            }else if(this.state.mealtype === "Main course"){
                                if(this.state.preference === "veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else{
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }
                                    console.log("2if 1if")
                                    console.log(this.state)
                                }else if(this.state.preference === "non_veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else{
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }
                                    console.log("2if 2if")
                                    console.log(this.state)
                                }else{
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }else{
                                        this.setState({
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            appetizer:[]
                                        })
                                    }
                                    // this.setState({
                                    //     mainCourse:this.state.data.filter(element => {
                                    //         return (element.cuisine === this.state.cuisine || element.cuisine === "Indian") && element.mealtype === "Main course" && element.mealsubtype !== "Dessert"
                                    //     }),
                                    //     dessert:this.state.data.filter(element => {
                                    //         return element.mealsubtype === "Dessert"
                                    //     }),
                                    //     appetizer:[]
                                    // })
                                    console.log("2if 3if")
                                    console.log(this.state)
                                }

                            }else{
                                if(this.state.preference === "veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else{
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter" && element.preference === "veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.preference === "veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }
                                    console.log("3if 1if")
                                    console.log(this.state)
                                }else if(this.state.preference === "non_veg"){
                                    if(this.state.cuisine === "Indian & Chinese"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else{
                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter" && element.preference === "non_veg"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.preference === "non_veg" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }
                                    console.log("3if 2if")
                                    console.log(this.state)
                                }else{
                                    if(this.state.cuisine === "Indian & Chinese"){

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Chinese") && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Chinese") && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else if(this.state.cuisine === "Indian & Continental"){

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Continental") && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine || element.cuisine === "Indian" || element.cuisine === "Continental") && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }else{

                                        this.setState({
                                            appetizer:this.state.data.filter(element => {
                                                return element.cuisine === this.state.cuisine && element.mealtype === "Starter"
                                            }),
                                            dessert:this.state.data.filter(element => {
                                                return element.mealsubtype === "Dessert"
                                            }),
                                            mainCourse:this.state.data.filter(element => {
                                                return (element.cuisine === this.state.cuisine) && element.mealtype === "Main course" && element.mealsubtype !== "Dessert" && element.mealsubtype !== "Rice" && element.mealsubtype !== "Breads"
                                            })
                                        })
                                    }
                                    console.log("3if 3if")
                                    console.log(this.state)
                                }
                            }
                        }

                            // end
                        }

    calculate(){

        let peoples = this.state.people

        const mainCoursePriceArr = this.state.mainCourse.filter(item=>{
            return item.value === true
        })

        const appetizerPriceArr = this.state.appetizer.filter(item=>{
            return item.value === true
        })

        const dessertPriceArr = this.state.dessert.filter(item=>{
            return item.value === true
        })

        const breadRicePriceArr = this.state.breadRice.filter(item=>{
            return item.value === true
        })

        console.log("app")
        console.log(appetizerPriceArr)
        console.log("main")
        console.log(mainCoursePriceArr)
        console.log("dess")
        console.log(dessertPriceArr)

        let mainCoursePrice = mainCoursePriceArr.reduce((acc, item) => {
            if(item.quantity === "kg") {
                    if(mainCoursePriceArr.length === 1){
                        return acc + (item.price * peoples * 0.150)
                    }
                    return acc + (item.price * peoples * 0.100)
            }
                if(item.name === "Pooris"){
                    return acc + ((item.price)/12 * peoples * 3 )
                }
                return acc + ((item.price)/12 * peoples * 2)
        }, 0)

        let breadRicePrice = breadRicePriceArr.reduce((acc, item) => {
            if(item.quantity === "kg") {
                    if(mainCoursePriceArr.length === 1){
                        return acc + (item.price * peoples * 0.150)
                    }
                    return acc + (item.price * peoples * 0.100)
            }
                if(item.name === "Pooris"){
                    return acc + ((item.price)/12 * peoples * 3 )
                }
                return acc + ((item.price)/12 * peoples * 2)
        }, 0)

        let appetizerPrice = appetizerPriceArr.reduce((accu, itema) => {
            if(itema.quantity === "kg") {
                    // if(mainCoursePriceArr.length === 1){
                    //     return accu + (itema.price * peoples * 0.150)
                    // }
                    return accu + (itema.price * peoples * 0.100)
            }
                // if(itema.name === "Pooris"){
                //     return accu + ((itema.price)/12 * peoples * 3 )
                // }
                return accu + ((itema.price)/12 * peoples * 2)
        }, 0)

        let dessertPricee = dessertPriceArr.reduce((accum, itemd) => {
            if(itemd.quantity === "kg") {
                    return accum + ((itemd.price * peoples) * 0.075)
            }
                return accum + ((itemd.price)/12 * peoples * 2)
        }, 0)

        console.log(this.state)

        this.setState({
            totalMainCoursePrice : Math.round(mainCoursePrice),
            totalAppeticerPrice : Math.round(appetizerPrice),
            totalDessertPrice : Math.round(dessertPricee),
            totalBreadRicePrice : Math.round(breadRicePrice),
        }) 


    }

    nextthreetofour = () => {
                            this.setState({
                                isOpen3: false,
                                isOpen4: true,
                                boolean:true,
                            });
                            this.calculate()
                        }

    nextfourtofive = () => {
        if(!this.state.email){
            alert("please enter email address")
        }else if(!this.state.mobileno){
            alert("please enter mobile number")
        }else{
            this.setState({
                isOpen4: false,
                isOpen5: true,
                boolean:true,
            });
        }
                        }
    prevtwotoone = () => this.setState({ 
                                isOpen1: true,
                                isOpen2: false,
                                appetizer:[],
                                mainCourse:[]
                            });
    prevthreetotwo = () => this.setState({ 
                                isOpen2: true,
                                isOpen3: false,
                                appetizer:[],
                                mainCourse:[]
                            });
    prevfourtothree = () => this.setState({ 
                                isOpen3: true,
                                isOpen4: false,
                            });
    prevfivetofour = () => this.setState({ 
                                isOpen4: true,
                                isOpen5: false,
                            });
    
    occasion = (e) => this.setState({
        occasion:e.target.value
    })

    change = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    optionClicked(optionsList) {
        this.setState({ appetizer: optionsList });
    }
    selectedBadgeClicked(optionsList) {
            this.setState({ appetizer: optionsList });
    }
    optionClicked2(optionsList) {
        this.setState({ mainCourse: optionsList });
        // console.log(optionsList)
    }
    selectedBadgeClicked2(optionsList) {
        this.setState({ mainCourse: optionsList });
        // console.log(optionsList)
    }
    optionClicked3(optionsList) {
        this.setState({ dessert: optionsList });
        // console.log(optionsList)
    }
    selectedBadgeClicked3(optionsList) {
        this.setState({ dessert: optionsList });
        // console.log(optionsList)
    }
    optionClicked4(optionsList) {
        this.setState({ breadRice: optionsList });
        // console.log(optionsList)
    }
    selectedBadgeClicked4(optionsList) {
        this.setState({ breadRice: optionsList });
        // console.log(optionsList)
    }

    convertDate(date){
        var datearray = date.split("-");
        var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];
        return newdate;
    }

    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#4da8da"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d",
            appetizerPrice:''
        };
        // const appetizerPrice = this.state.appetizer.filter(item=>{
        //     return item.value === true
        // }).reduce((totalCalories, meal) => totalCalories +  meal.price, 0);

        // const mainCoursePriceArr = this.state.mainCourse.filter(item=>{
        //     return item.value === true
        // })
        
        // const mainCoursePriceA = mainCoursePriceArr.reduce((totalPrice, element) => {
        //     if(element.quantity === "kg") {
        //         if(mainCoursePriceArr.length === 1){
        //             return totalPrice + (element.price * this.state.people * 0.150)
        //         }else{
        //             return totalPrice + (element.price * this.state.people * 0.100)
        //         }
        //     }else if(element.quantity === "pcs"){
        //         if(element.mealsubtype === "Pooris"){
        //             return totalPrice + (element.price * this.state.people * 3)
        //         }else{
        //             return totalPrice + (element.price * this.state.people * 2)
        //         }
        //     }
        // }, 0);

        // const dessertPrice = this.state.dessert.filter(item=>{
        //     return item.value === true
        // }).reduce((totalCalories, meal) => totalCalories +  meal.price, 0);

        return (
                <div>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "100px" }}
                        >
                        <Button variant="primary" onClick={this.openModal}>
                            Book a Chef
                        </Button>
                    </div>

                    <Modal show={this.state.isOpen1} onHide={this.closeModal} 
                    animation={false} backdrop="static" dialogClassName="modal-60w" >
                        <Modal.Header closeButton>
                            <Modal.Title>Welcome to cater Ninja</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                        <div>Select City</div>
                            <input type="radio" className="btn-check" name="city" id="city_mumbai" value="Mumbai" 
                            autoComplete="off" defaultChecked={this.state.city === "Mumbai"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="city_mumbai">Mumbai</label>

                            <input type="radio" className="btn-check" name="city" id="city_bangalore" value="Bangalore" 
                            autoComplete="off" defaultChecked={this.state.city === "Bangalore"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="city_bangalore">Bangalore</label>

                            {/* <input type="radio" className="btn-check" name="city" id="Lunch&Dinner" value="Lunch and dinner" 
                            autoComplete="off" defaultChecked={this.state.meal === "Lunch and dinner"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Lunch&Dinner">Lunch and Dinner</label> */}

                            <br/>
                            <hr/>

                            <div>Select Occasion</div>
                            <input type="radio" className="btn-check" name="options-outlined" id="BirthdayParty" value="Birthday party" 
                            autoComplete="off" defaultChecked={this.state.occasion === "Birthday party"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="BirthdayParty">Birthday party</label>

                            <input type="radio" className="btn-check" name="options-outlined" id="HouseParty" value="House party" 
                            autoComplete="off" defaultChecked={this.state.occasion === "House party"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="HouseParty">House party</label>

                            <input type="radio" className="btn-check" name="options-outlined" id="KittyParty" value="Kitty party" 
                            autoComplete="off" defaultChecked={this.state.occasion === "Kitty party"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="KittyParty">Kitty party</label>

                            <input type="radio" className="btn-check" name="options-outlined" id="SpecialLunch" value="Special lunch" 
                            autoComplete="off" defaultChecked={this.state.occasion === "Special lunch"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="SpecialLunch">Special lunch</label>

                            <input type="radio" className="btn-check" name="options-outlined" id="SpecialDinner" value="Special dinner" 
                            autoComplete="off" defaultChecked={this.state.occasion === "Special dinner"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="SpecialDinner">Special dinner</label>

                            <input type="radio" className="btn-check" name="options-outlined" id="OtherOccasion" value="Other Occasion" 
                            autoComplete="off" defaultChecked={this.state.occasion === "Other Occasion"} onChange={(e)=>{this.occasion(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="OtherOccasion">Other Occasion</label>

                            <br/>
                            <hr/>
                            <div>Number of people (above 7 years of age)</div>
                            <select className="form-select" aria-label="Default select example" name="people" value={this.state.people} onChange={(e)=>{this.change(e)}}>
                                <option defaultValue>select people</option>
                                {/* <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option> */}
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>
                            <br/>
                            <hr/>
                            <div>Select Date</div>
                            <div>
                                <input className="form-control" type="date" min={this.state.todaysDate} value={this.state.date} id="example-datetime-local-input" onChange={(e)=>{this.setState({date:e.target.value})}}/>
                            </div>
                            <br/>
                            <hr/>
                            <div>Select Meal</div>
                            <input type="radio" className="btn-check" name="meal" id="LunchOnly" value="Lunch only" 
                            autoComplete="off" defaultChecked={this.state.meal === "Lunch only"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="LunchOnly">Lunch only</label>

                            <input type="radio" className="btn-check" name="meal" id="DinnerOnly" value="Dinner only" 
                            autoComplete="off" defaultChecked={this.state.meal === "Dinner only"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="DinnerOnly">Dinner Only</label>

                            <input type="radio" className="btn-check" name="meal" id="Lunch&Dinner" value="Lunch and dinner" 
                            autoComplete="off" defaultChecked={this.state.meal === "Lunch and dinner"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Lunch&Dinner">Lunch and Dinner</label>
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.nextonetotwo}>
                                next
                            </Button>
                        </Modal.Footer>
                    </Modal> 

                    <Modal show={this.state.isOpen2} onHide={this.closeModal} animation={false} 
                    backdrop="static" dialogClassName="modal-60w">
                        <Modal.Header closeButton>
                            <Modal.Title>Select the details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>Select Cuisine</div>
                            <input type="radio" className="btn-check" name="cuisine" id="Indian" value="Indian" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Indian"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Indian">North Indian</label>

                            <input type="radio" className="btn-check" name="cuisine" id="Indian&Chinese" value="Indian & Chinese" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Indian & Chinese"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Indian&Chinese">Indian & Chinese</label>

                            <input type="radio" className="btn-check" name="cuisine" id="Chinese" value="Chinese" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Chinese"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Chinese">Chinese</label>

                            <input type="radio" className="btn-check" name="cuisine" id="Indian&Continential" value="Indian & Continental" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Indian & Continential"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Indian&Continential">Indian & Continential</label>


                            <input type="radio" className="btn-check" name="cuisine" id="PanAsia" value="Pan Asian" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Pan Asian"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="PanAsia">Pan Asia</label>

                            <input type="radio" className="btn-check" name="cuisine" id="Bengali" value="Bengali" 
                            autoComplete="off" defaultChecked={this.state.cuisine === "Bengali"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Bengali">Bengali</label>

                            <br/>
                            <hr/>
                            <div>Select Preference</div>
                            <input type="radio" className="btn-check" name="preference" id="veg" value="veg" 
                            autoComplete="off" defaultChecked={this.state.preference === "veg"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="veg">Veg</label>

                            <input type="radio" className="btn-check" name="preference" id="NonVeg" value="non_veg" 
                            autoComplete="off" defaultChecked={this.state.preference === "non_veg"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="NonVeg">Non veg</label>

                            <input type="radio" className="btn-check" name="preference" id="veg&Nonveg" value="veg & non_veg" 
                            autoComplete="off" defaultChecked={this.state.preference === "veg & non_veg"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="veg&Nonveg">veg & Nonveg</label>
                            <br/>
                            <hr/>

                            <div>Select Meal Type</div>
                            <input type="radio" className="btn-check" name="mealtype" id="AppetizerOnly" value="Starter" 
                            autoComplete="off" defaultChecked={this.state.mealtype === "Starter"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="AppetizerOnly">Appetizer only</label>

                            <input type="radio" className="btn-check" name="mealtype" id="MainCourse" value="Main course" 
                            autoComplete="off" defaultChecked={this.state.mealtype === "Main course"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="MainCourse">Main course</label>

                            <input type="radio" className="btn-check" name="mealtype" id="Appetizers&MainCourse" value="Starter & MainCourse" 
                            autoComplete="off" defaultChecked={this.state.mealtype === "Starter & MainCourse"} onChange={(e)=>{this.change(e)}}/>
                            <label className="btn btn-outline-secondary" htmlFor="Appetizers&MainCourse">Appetizers & Main Course</label>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={this.prevtwotoone}>
                                previous
                            </Button>
                            <Button variant="primary" onClick={this.nexttwotothree}>
                                next
                            </Button>
                        </Modal.Footer>
                    </Modal>

                            


                    <Modal show={this.state.isOpen3} onHide={this.closeModal} animation={false} 
                    backdrop="static" dialogClassName="modal-60w">
                        <Modal.Header closeButton>
                            <Modal.Title>Add to your dish</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                        {/* <Form.Group as={Col} controlId="my_multiselect_field">
      <Form.Label>My multiselect</Form.Label>
      <Form.Control as="select" multiple >
        <option value="field1">Field 1</option>
        <option value="field2">Field 2</option>
        <option value="field3">Field 3</option>
      </Form.Control>
    </Form.Group> */}

                            <div className={this.state.dessertClassname} onClick={()=>{this.setState({dessertClassname:"caterNinja_add_dessert_button caterNinja_add_dessert_button_hide", showDessert:true})}}>
                                Add Dessert +
                            </div>
                            {this.state.mealtype === "Starter" &&
                            <div>
                                
                                <div>Select Appetizer</div>
                                <MultiSelectReact 
                                    options={this.state.appetizer}
                                    optionClicked={this.optionClicked.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles} 
                                />
                            </div>
                            }

                            {this.state.mealtype === "Main course" && <div>
                                <div>Select Main Course</div>
                                <MultiSelectReact 
                                    options={this.state.mainCourse}
                                    optionClicked={this.optionClicked2.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked2.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles} 
                                />
                            </div>}

                            {this.state.mealtype === "Starter & MainCourse" &&
                            <div>
                                <div>Select Appetizer</div>
                                <MultiSelectReact 
                                    options={this.state.appetizer}
                                    optionClicked={this.optionClicked.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles} 
                                />
                            </div>
                            }

                            {this.state.mealtype === "Starter & MainCourse" && <div>
                                <br/>
                                <hr/>
                                <div>Select Main Course</div>
                                <MultiSelectReact 
                                    options={this.state.mainCourse}
                                    optionClicked={this.optionClicked2.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked2.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles}
                                     
                                />
                            </div>}

                                <br/>
                                <hr/>
                                <div>Add Breads and Rice</div>
                                <MultiSelectReact 
                                    options={this.state.breadRice}
                                    optionClicked={this.optionClicked4.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked4.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles}
                                     
                                />

                                <br/>
                                <hr/>
                                {this.state.showDessert &&<div> 
                                    <div>Add Desserts</div>
                                
                                <MultiSelectReact 
                                    options={this.state.dessert}
                                    optionClicked={this.optionClicked3.bind(this)}
                                    selectedBadgeClicked={this.selectedBadgeClicked3.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles}  
                                />
                                </div>
                                }



                        {/* <div class="ui form">

  <h3>Dropdown with Topic Display</h3>

  <div class="inline field">
    <label>Select Topics</label>

    <select name="skills" multiple="" class="label ui selection fluid dropdown">
      <option value="">All</option>
      <option value="1">Change Methodology</option>
      <option value="2">Cognitive Computing & AI</option>
      <option value="3">Connectivity & Collaboration</option>
      <option value="4">Culture in Action</option>
      <option value="5">Future of Work</option>
      <option value="6">HR Transformation</option>
      <option value="7">Human-centered Design</option>
      <option value="8">Machine Learning & AI</option>
      <option value="9">Operational Effectiveness</option>
      <option value="10">Operational Excellence</option>
      <option value="11">Organizational Change</option>

    </select>
  </div>

  <h3>Dropdown with Selection Count</h3>
  <div class="inline field">
    <label>Select Topics</label>

    <select name="skills" multiple="" class="ui fluid selection dropdown no label">
      <option value="">All</option>
      <option value="1">Change Methodology</option>
      <option value="2">Cognitive Computing & AI</option>
      <option value="3">Connectivity & Collaboration</option>
      <option value="4">Culture in Action</option>
      <option value="5">Future of Work</option>
      <option value="6">HR Transformation</option>
      <option value="7">Human-centered Design</option>
      <option value="8">Machine Learning & AI</option>
      <option value="9">Operational Effectiveness</option>
      <option value="10">Operational Excellence</option>
      <option value="11">Organizational Change</option>
    </select>
  </div>

</div>

<br></br>

<div class="ui button">
  Clear Filters
</div> */}


{/* <select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</select> */}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={this.prevthreetotwo}>
                                previous
                            </Button>
                            <Button variant="primary" onClick={this.nextthreetofour}>
                                next
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.isOpen4} onHide={this.closeModal} animation={false} 
                    backdrop="static" dialogClassName="modal-60w">
                        <Modal.Header closeButton>
                            <Modal.Title>Share your details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <div>Your email address :</div>
                                <div >
                                    <input style={{width:"60%"}} value={this.state.email} placeholder="enter your email address" name="email" onChange={(e)=>{this.change(e)}}></input>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <div>Your mobile number :</div>
                                <div>
                                    <input style={{width:"60%"}} value={this.state.mobileno} type="number" placeholder="enter your mobile number" name="mobileno" onChange={(e)=>{this.change(e)}}></input>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.prevfourtothree}>
                                previous
                            </Button>
                            <Button variant="primary" onClick={this.nextfourtofive}>
                                next
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.isOpen5} onHide={this.closeModal} animation={false} 
                    backdrop="static" dialogClassName="modal-60w">
                        <Modal.Header closeButton>
                            <Modal.Title>Bill</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <div>
                                <div className='result_head'>
                                    <div>Occasion : {this.state.occasion}</div>
                                    <div>Date : {this.convertDate(this.state.date)}</div>
                                </div>

                                <hr/>

                                <div>
                                    City : {this.state.city}
                                </div>
                                <div>
                                    Number of people : {this.state.people}
                                </div>

                                <div>
                                    Meal : {this.state.meal}
                                </div>
                                <div>
                                    cuisine : {this.state.cuisine}
                                </div>
                                <div>
                                    Preference : {this.state.preference}
                                </div>
                                <div>
                                    Meal Type : {this.state.mealtype}
                                </div>
                                <div>
                                    Meal c price : {this.state.totalMainCoursePrice}
                                </div>

                                <hr/>

                                {this.state.boolean && this.state.appetizer.some(el => el.value === true) &&
                                <div> Appetizer Details : 
                                    <table>
                                                <tr>
                                                    <th>Name</th>
                                                    {/* <th>Price</th> */}
                                                </tr>
                                        {this.state.appetizer.map((item,index)=>{
                                    
                                        return item.value === true &&  (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    {/* <td className="price_td">{item.price}</td> */}
                                                </tr>
                                        )
                                        })}
                                        {/* <tr>
                                            <td>
                                                Total
                                            </td>
                                            <td className="price_td">
                                                {this.state.totalAppeticerPrice}
                                            </td>
                                        </tr> */}
                                    </table>
                                    Your total Appetizer price is : Rs. {this.state.totalAppeticerPrice}
                                </div>}

                                <br/>

                                {this.state.boolean && this.state.mainCourse.some(el => el.value === true) &&
                                <div> Main Course Details : 
                                    <table>
                                                <tr>
                                                    <th>Name</th>
                                                    {/* <th>Price</th> */}
                                                </tr>
                                        {this.state.mainCourse.map((item,index)=>{
                                    
                                        return item.value === true &&  (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    {/* <td className="price_td">{item.price}</td> */}
                                                </tr>
                                        )
                                        })}
                                        {/* <tr>
                                            <td>
                                                Total
                                            </td>
                                            <td className="price_td">
                                                {this.state.totalMainCoursePrice}
                                            </td>
                                        </tr> */}
                                    </table>
                                    Your total Main Course price is : Rs. {this.state.totalMainCoursePrice}
                                </div>}

                                <br/>
                                {this.state.boolean && this.state.dessert.some(el => el.value === true) &&
                                <div> Desserts Details : 
                                    <table>
                                                <tr>
                                                    <th>Name</th>
                                                    {/* <th>Price</th> */}
                                                </tr>
                                        {this.state.dessert.map((item,index)=>{
                                    
                                        return item.value === true &&  (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    {/* <td className="price_td">{item.price}</td> */}
                                                </tr>
                                        )
                                        })}
                                        <tr>
                                            {/* <td>
                                                Total
                                            </td>
                                            <td className="price_td">
                                                {this.state.totalDessertPrice}
                                            </td> */}

                                        </tr>
                                    </table>
                                            Your total dessert price is : {this.state.totalDessertPrice}
                                </div>}

                                <br/>
                                {this.state.boolean && this.state.breadRice.some(el => el.value === true) &&
                                <div> Bread & Rice Details : 
                                    <table>
                                                <tr>
                                                    <th>Name</th>
                                                    {/* <th>Price</th> */}
                                                </tr>
                                        {this.state.breadRice.map((item,index)=>{
                                    
                                        return item.value === true &&  (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    {/* <td className="price_td">{item.price}</td> */}
                                                </tr>
                                        )
                                        })}
                                        <tr>
                                            {/* <td>
                                                Total
                                            </td>
                                            <td className="price_td">
                                                {this.state.totalDessertPrice}
                                            </td> */}

                                        </tr>
                                    </table>
                                            Your total dessert price is : {this.state.totalBreadRicePrice}
                                </div>}
                            </div>
                            <hr/>
                            
                            <div>
                                Grand total = ( Appetizer Total + Main Course Total + Dessert Total + Bread & Rice Total ) + 5% GST
                            </div>
                            <div>
                                = ({this.state.totalAppeticerPrice}+{this.state.totalMainCoursePrice}+{this.state.totalDessertPrice}+{this.state.totalBreadRicePrice}) + {(this.state.totalAppeticerPrice + this.state.totalMainCoursePrice + this.state.totalDessertPrice + this.state.totalBreadRicePrice)*5/100}
                            </div>
                            <div>
                                <strong>
                                = {this.state.totalAppeticerPrice + this.state.totalMainCoursePrice + this.state.totalDessertPrice + this.state.totalBreadRicePrice  + (((this.state.totalAppeticerPrice + this.state.totalMainCoursePrice + this.state.totalDessertPrice + this.state.totalBreadRicePrice)*5)/100)} Rupees only
                                </strong>
                            </div>
                            
                        </Modal.Body>

                        <Modal.Footer>
                            <div className="total_footer">

                            {/* <div >
                                Total amount you have to pay : {(appetizerPrice+mainCoursePrice+dessertPrice) * (this.state.people)}
                            </div> */}
                            <Button variant="primary" onClick={this.prevfivetofour}>
                                previous
                            </Button>
                            <Button variant="info" onClick={()=>{alert("Redirect to payment page")}}>
                                Proceed for payment
                            </Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
        )
    }
}
