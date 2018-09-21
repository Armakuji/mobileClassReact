import React, { Component } from 'react';
import Image from './image';
import Columns from './Columns';
import 'bulma/css/bulma.css';
class MyApp extends Component {
    render(){
        return(
            <div >
                <section class="section">
                    <Columns class="columns">
                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg') }alt="VivoV11"/>
                        </Columns>
                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png') }alt="IphoneX"/>
                        </Columns>
                        <Columns class="column">
                            <Image src={require('./img/samsunggalaxynote9.png') }alt="samsung"/>
                        </Columns>
                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png') }alt="oppoF9"/>
                        </Columns>     
                    </Columns>
                    
                </section>
                
            </div>
           
        );
    }
};

export default MyApp;