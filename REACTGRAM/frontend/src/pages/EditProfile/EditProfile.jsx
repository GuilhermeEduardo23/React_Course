import "./EditProfile.scss";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

// Components
import Message from "../../components/Message";

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, message, error, loading } = useSelector((state) => state.user);

  // states
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
    bio: "",
    previewImage: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Fill form with user data
  useEffect(() => {
    if (user) {
      setFormValues((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email,
        bio: user.bio || "",
      }));
    }
  }, [user]);

  // Load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather user data from states
    const userData = { name };

    if (formValues.profileImage)
      userData.profileImage = formValues.profileImage;

    if (formValues.bio) userData.bio = formValues.bio;

    if (formValues.password) userData.password = formValues.password;

    // build form data
    const formData = new FormData();

    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

    await dispatch(updateProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      {/* Image preview */}

      {(user.profileImage || formValues.previewImage) && (
        <img
          className="profile-image"
          src={
            formValues.previewImage
              ? URL.createObjectURL(formValues.previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          value={formValues.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          disabled
          value={formValues.email || ""}
        />
        <label>
          <span>Imagem do Perfil:</span>
          <input type="file" name="profileImage" onChange={handleChange} />
        </label>
        <label>
          <span>Bio:</span>
          <input
            type="text"
            name="bio"
            placeholder="Descrição do seu perfil"
            onChange={handleChange}
            value={formValues.bio || ""}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua nova senha"
            onChange={handleChange}
            value={formValues.password || ""}
          />
        </label>
        {!loading && <input type="submit" value="Atualizar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </form>
    </div>
  );
};

export default EditProfile;
