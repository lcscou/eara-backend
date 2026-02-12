export default function Save(props) {
  const { attributes } = props;
  const { buttonLabel, title, description } = attributes;

  return (
    <div className="join-eara-form">
      <div className="join-eara-form__content">
        <h2 className="join-eara-form__title">{title}</h2>
        <p className="join-eara-form__description">{description}</p>
        
        <form className="join-eara-form__form">
          <div className="join-eara-form__fields">
            <div className="join-eara-form__field">
              <label className="join-eara-form__label">
                Name <span className="join-eara-form__required">*</span>
              </label>
              <input 
                type="text" 
                className="join-eara-form__input" 
                placeholder="Your full name" 
                required
              />
            </div>

            <div className="join-eara-form__field">
              <label className="join-eara-form__label">
                Email <span className="join-eara-form__required">*</span>
              </label>
              <input 
                type="email" 
                className="join-eara-form__input" 
                placeholder="you@example.com" 
                required
              />
            </div>

            <div className="join-eara-form__field">
              <label className="join-eara-form__label">
                Institution <span className="join-eara-form__required">*</span>
              </label>
              <input 
                type="text" 
                className="join-eara-form__input" 
                placeholder="Your institution or organization" 
                required
              />
            </div>

            <div className="join-eara-form__field">
              <label className="join-eara-form__label">
                Country <span className="join-eara-form__required">*</span>
              </label>
              <input 
                type="text" 
                className="join-eara-form__input" 
                placeholder="Country where you are based" 
                required
              />
            </div>
          </div>

          <p className="join-eara-form__privacy">
            By submitting this form, you agree with EARA's{" "}
            <a href="#" className="join-eara-form__privacy-link">Privacy Policy</a>.
          </p>

          <div className="join-eara-form__actions">
            <button type="submit" className="join-eara-form__button">
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
