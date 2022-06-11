import React from "react";
import * as S from './Styled'

const Profile = () => {
    return <S.Wrapper>
                <S.WrapperImage src="https://avatars.githubusercontent.com/u/99164770?v=4" alt="picture of user"/>
   <div>
    <S.WrapperInfoUser>
        <h1>Tamires Almeida</h1>
        <S.WrapperUserName>
            <h3>UserName: </h3>
            <span>almeidaTamires</span>
        </S.WrapperUserName>
    </S.WrapperInfoUser>

            <S.WrapperStatusCount>
                <div>
                    <h4>Follower</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
        </div> 
    </S.Wrapper>;
}

export default Profile