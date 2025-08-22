import chefClaudeLogo from ".src/assets/chef-claude-icon.png";

export default function Header() {
    return (
      <section className="header-section">
        <img src={chefClaudeLogo} alt="icon image" />
        <h1>Chef Claude</h1>
      </section>
    );
}