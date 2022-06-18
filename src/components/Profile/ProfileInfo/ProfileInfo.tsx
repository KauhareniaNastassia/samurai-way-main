import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType ={

}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.img} src='https://i.ytimg.com/vi/RFtHbO8lGEI/maxresdefault_live.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
