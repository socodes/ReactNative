import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import updateTweet from './components/updateTweet';
const RouterComp = () => {
    return(

        <Router key='root' titleStyle={{color:'#87B79'}}>
            <Scene hideNavBar={true} initial>
                <Scene key='auth'>
                    <Scene key='login'
                        component={LoginForm}
                        title='Login'
                        initial
                        hideNavBar={true}
                            /> 
                </Scene>
                <Scene key='main'  >
                    <Scene key='tweets'
                    component={Tweets}
                    title='Tweets'
                    rightTitle='New'
                    onRight={() => Actions.newTweet()}
                    ></Scene>
                    <Scene key='newTweet' 
                    component={NewTweet} 
                    title='New Tweet' ></Scene>
                    <Scene key='updateTweet' 
                    component={updateTweet} 
                    title='Update / Delete Tweet' ></Scene>
                </Scene>
                
            </Scene>
        </Router> 
    )
}

export default RouterComp;