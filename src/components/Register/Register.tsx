import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMobileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Register.module.scss";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../../redux/actions/UserAction";
import { UserState, User } from "../../types/UserType";
import { RootState } from "../../redux/reducers";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    phone: yup.string().trim().matches(/^(?:\d{10}|(84|0[3|5|7|8|9])+([0-9]{8})\b|\w+@\w+\.\w{2,3})$/ , 'Số điện thoại hoặc email không hợp lệ').required(),
    password: yup.string().min(8, 'Mật khẩu phải trên 8 kí tự').required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  
  const [pass, setPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(errors.phone);
  const [repeatPass, setRepeatPass] = useState<string>("");

  const user: UserState = useSelector((state: RootState) => state.user);
  const { error } = user;


  const onSubmit = async (data: User) => {
    if (pass === repeatPass) {
      await dispatch(registerUserRequest(data, () => {
        history.push('/login')
      }));
    } else {
      setErrorMessage('Mật khẩu không khớp')
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <div className={styles.register_title}>
          Đăng kí tài khoản Zalo <br></br>để kết nối với ứng dụng Zalo Chat
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register_form_input}>
            <input
              type="text"
              placeholder="Họ và tên"
              required
              {...register("name")}
            ></input>
            <span>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </span>
          </div>
          <div className={styles.register_form_input}>
            <input
              type="text"
              placeholder="Số điện thoại hoặc email"
              {...register("phone")}
            ></input>
            <span>
              <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
            </span>
            {
              errors.phone ? (<div className={styles.error}>{errors.phone?.message}</div>) : ''
            }
            {error ? <div className={styles.error}>{error}</div> : ""}
          </div>
          <div className={styles.register_form_input}>
            <input
              type="password"
              placeholder="Mật khẩu"
              required
              {...register("password")}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setPass(e.currentTarget.value)
              }
            ></input>
            <div className={styles.error}>{errors.password?.message}</div>
            {
              errors.password ? (<div className={styles.error}>{errors.password?.message}</div>) : ''
            }
            <span>
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </span>
          </div>
          <div className={styles.register_form_input}>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              required
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setRepeatPass(e.currentTarget.value)
              }
            ></input>
            <span>
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </span>
            {
              errorMessage ? (<div className={styles.error}>{errorMessage}</div>) : ''
            }
          </div>

          <button className={styles.btn}>Đăng kí</button>

          <div className={styles.toLogin}>
            <Link to="/login">Đăng nhập!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
