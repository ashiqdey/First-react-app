import { Component } from "react";

class Product extends Component{
    constructor(props){
        super();

        this.props = props;


        this.p = {
            title: 'FitBit 19 - The Smartest Watch',
            description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
            colorOptions: [
                {
                    styleName: 'Black Strap',
                    imageUrl: 'https://imgur.com/iOeUBV7.png'
                },
                {
                    styleName: 'Red Strap',
                    imageUrl: 'https://imgur.com/PTgQlim.png'
                },
                {
                    styleName: 'Blue Strap',
                    imageUrl: 'https://imgur.com/Mplj1YR.png'
                },
                {
                    styleName: 'Purple Strap',
                    imageUrl: 'https://imgur.com/xSIK4M8.png'
                },
            ],
            featureList: [
                "Time", "Heart Rate"
            ]
        }
     

        console.log("product constructor");
    }

    componentDidMount(){
        console.log("product componentdidmount");
    }


    shouldComponentUpdate(nextProps,nextState){
        //condition can be applied, whether to re render the DOM
        return true;
    }


    render(){
        console.log("product render");

        return (<div className='flex product'>
            <div className='w50 tc pr'>
                <img src={this.p.colorOptions[this.props.curImage].imageUrl} alt={this.p.colorOptions[this.props.curImage].styleName} />
                {this.props.feature==='time'?<div className='time'>{new Date().getHours()+':'+new Date().getMinutes()}</div>:null}
                {this.props.feature==='heartbeat'?<div className='heart'>&hearts;</div>:null}
                
            </div>
            <div className='w50'>
                <h2>{this.p.title}</h2>
                <div>{this.p.description}</div>
                
                <h4>Select color</h4>
                {this.p.colorOptions.map((item,i)=>{
                    return <img src={item.imageUrl} alt={item.styleName} className={(i===this.props.curImage?'active ':'')+'simg'} onClick={() => this.props.selectImage(i)} key={i}/>
                    })
                }
                <h4>Features</h4>
                <div>
                    <button className={this.props.feature==='heartbeat'?'active btn':'btn'} onClick={() => this.props.featureChange('heartbeat')}>Heart beat</button>
                    <button className={this.props.feature==='time'?'active btn':'btn'} onClick={() => this.props.featureChange('time')}>Time</button>
                </div>

                <button className='btn buy'>BUY NOW</button>
            </div>
        </div>)
    }
}

export default Product;