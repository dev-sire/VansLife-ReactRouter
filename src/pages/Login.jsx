import { useEffect } from "react"
import { loginUser } from "../Api"
import { Form, useActionData, useNavigation, useLocation, useNavigate } from "react-router-dom"

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({email, password})
        localStorage.setItem("loggedIn", true)
        return data

    }catch(err){
        return {error: err.message}
    }
}

export default function Login() {
    const location = useLocation()
    const data = useActionData()
    const navigate = useNavigate()
    const navigation = useNavigation()
    const from = location.state?.from || '/host';

    useEffect(() => {
      if (data?.token) {
        navigate(from, { replace: true })
      }
    }, [data]);

    return (
        <div className="login-container">
            <h1>Welcome Back!</h1>
            {location.state?.message  && <h3 className="red">{location.state.message}</h3>}
            {data?.error && <h3 className="red">{data.error}</h3>}
            <Form className="login-form" method="post" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>
                   {navigation.state === "submitting" ? "logging in" : "log in"} 
                </button>
            </Form>
        </div>
    )

}