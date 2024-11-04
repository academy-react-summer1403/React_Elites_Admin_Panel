import { Formik, Form, Field, ErrorMessage } from "formik";
import  styleLogin  from "../../Style/list.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { loginAPI } from "../../core/services/api/auth-Login";
import { useGlobalState } from "../../State/State";
import { setItem } from "../../core/services/storage/storage.services";

const Login = () => {

  const [isLogin, setIsLogin] = useGlobalState('isLogin');

  const loginUser = async (values) => {
    const user = await loginAPI(values)
    setItem("token", user.token)
    if(user.success == true){
      setIsLogin(true)
      setItem('isLogin', isLogin)
      console.log(user)
    }
    else {
      return
    }
  }

  return (
    <Formik 
      initialValues={{password: "", phoneOrGmail: ""}}
      onSubmit={(values) => loginUser(values)}
    >
    {(form) => (
        <Form className={styleLogin.form}>
          {isLogin && <Navigate to="/" />}
          <div className={styleLogin.navigate}>
            <div className="w-72 flex flex-wrap h-full">
              <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
              <h1 className="w-full align-right text-black text-base font-DannaMedium tracking-tight mt-3">وارد کردن شماره همراه </h1>
            </div>
            <div className="w-72 h-full flex flex-wrap">
              <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
              <h1 className="w-full items-right text-gray-400 text-base font-DannaMedium tracking-tight mt-3">تایید کد ارسال شده دو مرحله ای </h1>
              <h1 className="w-full items-right text-gray-400 text-sm font-DannaMedium tracking-tight">(درصورت فعال بودن دو مرحله ای) </h1>
            </div>
          </div>
            <div className="h-full max-w-96 my-8 mx-0 mt-20">
              <h1 className="text-black text-2xl font-DannaDemiBold mt-7 mb-4">خوش برگشتی!</h1>
              <p className="text-gray-400 text-sm font-DannaDemiBold">لطفا شماره همراه یا ایمیل و رمز عبور را برای ورود<br /> به حساب کاربری وارد کنید</p>
            </div>
            <div className="h-full max-w-96 mx-0 text-right">
              <label className="text-base font-DannaDemiBold text-black pb-3">شماره همراه یا ایمیل </label>
              <Field className={styleLogin.input} name="phoneOrGmail" placeholder="شماره همراه یا ایمیل خود را وارد کنید" />
              <ErrorMessage name="phoneOrGmail" component={"p"} className="error"/>
            </div>
            <div className="h-full max-w-96  my-4 mx-0 text-right">
              <label className="text-base font-DannaDemiBold text-black pb-1.5">رمز عبور</label>
              <Field type='password' className={`${styleLogin.input} ${styleLogin.inputPassword}`} name="password" placeholder="رمز عبور خود را وارد کنید" />{/*w-full text-right h-11 pr-3 mt-4 font-DannaMedium bg-white text-gray-800 border border-solid border-Gray-400 rounded-3xl */}
              <ErrorMessage name="password" component={"p"} className="error"/>
            </div>
            <div className="h-full max-w-96 flex justify-between my-4 mx-0 text-right">
              <div className="flex items-center gap-1.5">
                <label htmlFor="rememberPassInput" className="text-base font-DannaDemiBold text-black text-left ">مرا به خاطر بسپار</label>
                <Field id="rememberPassInput" type="checkbox" className="items-right rounded w-4 text-right text-black :" name="rememberPass"/>
              </div> 
              <NavLink to="/Auth/Forget-Password" className="border-none bg-slate-100 px-4 py-2 rounded-full cursor-pointer text-blue-700 text-xs font-DannaBold tracking-tight"> رمز عبور را فراموش کرده اید؟</NavLink>
              <ErrorMessage name="rememberPass" component={"p"} className="error"/>
            </div>             
            <div className="h-11 max-w-96 overflow-hidden flex">
              <button  className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">ورود به حساب</button>
            </div>
            <div className="mt-2 max-w-96 flex justify-center gap-1.5">
              <h1 className="red text-black text-sm font-DannaDemiBold">حساب کاربری ندارید؟</h1>
              <NavLink to="/Auth/Register" className="border-none cursor-pointer text-blue-700 text-sm font-DannaDemiBold tracking-tight decoratio underline">ایجاد حساب کاربری</NavLink>
            </div>
            <div className="flex max-w-96  justify-center mt-8">
              <div className={styleLogin.HomePageButton}>
                <NavLink to="/" className="border-non  cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight"> صفحه اصلی </NavLink>
                <img src="https://img.icons8.com/?size=64&id=Gc9qmZNN9yFN&format=png" className="w-5 text-black text-sm font-DannaExtraBold "></img>
              </div>
            </div>
          </Form>
      )}
    </Formik>
  )
}

export { Login }