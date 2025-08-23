<<<<<<< HEAD
import chefClaudeLogo from "../assets/chef-claude-icon.png";
=======
import chefClaudeLogo from ".src/assets/chef-claude-icon.png";
>>>>>>> 36266296668de57bb34436cfb2390f4d0bd20822

export default function Header() {
    return (
      <section className="header-section">
        <img src={chefClaudeLogo} alt="icon image" />
        <h1>Chef Claude</h1>
      </section>
    );
}