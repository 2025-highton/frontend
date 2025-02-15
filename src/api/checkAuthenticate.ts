import Cookies from 'js-cookie';

/**
 * Cookie에 저장된 accessToken을 확인하여 로그인 여부를 반환합니다
 * @returns 로그인 여부를 반환합니다
 */
const checkAuthenticate = () => {
    const cookie = Cookies.get('accessToken');

    return !!cookie;
}

export default checkAuthenticate;