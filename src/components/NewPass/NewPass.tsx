import { useState, FormEvent } from "react";
import styles from "./NewPass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePasswordRequest } from "../../redux/actions/UserAction";

interface Password {
  password: string;
}

const NewPass = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const email: any = localStorage.getItem("emailUserResetPass");

  const onSubmit = (data: Password) => {
    if (pass === repeatPass) {
      if (pass.length < 8) {
        setErrorMessage("Mật khẩu phải tối thiểu 8 kí tự");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        return;

      } else {
        const newData = {
          email: JSON.parse(email).email,
          password: data.password,
        };
        dispatch(updatePasswordRequest(newData));
      }
    } else {
      setErrorMessage("Mật khẩu không khớp");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Khôi phục mật khẩu Zalo <br></br>
        để kết nối với ứng dụng Zalo Chat
      </div>

      <form className={styles.pass} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.pass_input}>
          <input
            type="password"
            placeholder="Nhập mật khẩu mới"
            {...register("password")}
            required
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setPass(e.currentTarget.value)
            }
          ></input>
          <span>
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </span>
        </div>

        <div className={styles.pass_input}>
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
          {errorMessage.length > 0 ? (
            <div className={styles.error}>{errorMessage}</div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.btn}>
          <button>Xác nhận</button>
        </div>
      </form>
    </div>
  );
};
export default NewPass;
