
interface JwtResponse {
    token: string;
    id: number;
    email: string; // = username
}

export default JwtResponse;
