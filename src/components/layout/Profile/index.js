import React from "react";
import * as S from './Styled'

const Profile = () => {
    return <S.Wrapper>
                <S.WrapperImage src="https://avatars.githubusercontent.com/u/99164770?v=4" alt="picture of user"/>
   <S.WrapperInfoUser>
    <div>
        <h1>Tamires Almeida</h1>
        <S.WrapperUserName>
            <h3>UserName: </h3>
            <a href="https://github.com/almeidaTamires" target="_blank" rel="noreferrer">almeidaTamires</a>
        </S.WrapperUserName>
    </div>

            <S.WrapperStatusCount>
                <div>
                    <h4>Follower</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starred</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
   </S.WrapperInfoUser> 
    </S.Wrapper>;
}

export default Profile