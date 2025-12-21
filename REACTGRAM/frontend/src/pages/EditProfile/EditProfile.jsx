import "./EditProfile.scss";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, resetMessage } from "../../slices/userSlice";

// Components
import Message from "../../components/Message";

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, message, error, loading } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
    bio: "",
    previewImage: "",
  });

  // Fill form with user data
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      {/* Image preview */}

      {(user.profileImage || formData.previewImage) && (
        <img
        className="profile-image"
          src={
            formData.previewImage
              ? URL.createObjectURL(formData.previewImage)
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
          value={formData.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          disabled
          value={formData.email || ""}
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
            value={formData.bio || ""}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua nova senha"
            onChange={handleChange}
            value={formData.password || ""}
          />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default EditProfile;
