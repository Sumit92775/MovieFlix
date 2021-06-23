import React,{Component} from 'react';
import './netflix_home_1.css'
import Header from './../Header/Header.jsx'

class NetFlix_Home_1 extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className='shadow_effect'>
                   <Header></Header>
                    <div className="main_content">
                        <h1>Unlimited movie, TV</h1>
                        <h1>shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NetFlix_Home_1;