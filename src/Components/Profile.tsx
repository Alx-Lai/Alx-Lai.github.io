import './Profile.css'
import avatar from '../Images/avatar.png'
import sampleavatar from '../Images/avatar0.png'

const Profile = () =>{
    return(
        <div className='profile'>
            <img className='profile-avatar' alt='avatar' src={sampleavatar}/>
            <div className='profile-name'>Alex Lai</div>
            <div className='profile-signature'>不會Coding的資工猴</div>
            <hr className='profile-hr'/>
            <div className='profile-social'>
                <a href='mailto:alexabc722@gmail.com' id='profile-mail' title='email'></a>
                <a href='https://github.com/Alx-Lai' id='profile-github' title='github'></a>
                <a href='https://www.facebook.com/alex.lai.9404' id='profile-fb' title='facebook'></a>
                <a href='https://www.instagram.com/alex.0.0.10/' id='profile-ig' title='instagram'></a>
            </div>
        </div>
    )
}
export default Profile