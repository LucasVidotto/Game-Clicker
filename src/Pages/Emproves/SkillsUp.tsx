import { Link } from "react-router-dom";
import { useUpStore } from "../../Store/StoreUps";
import { BoxUp, CardCenter, UpgradeIcons } from "../../Styles/SkillsUpStyled";

export default function SkillsUp() {
  const incrementeUps = useUpStore((state) => state.incrementFirstUps);
  const incrementSecond = useUpStore((state) => state.incrementSecondUps);
  const incrementThird = useUpStore((state) => state.incrementThirdUps);

  const upgrades = [
    { action: incrementeUps, icon: UpgradeIcons.coin, label: "Upgrade: 1 → 2" },
    { action: incrementSecond, icon: UpgradeIcons.coinsStack, label: "Upgrade: 2 → 4" },
    { action: incrementThird, icon: UpgradeIcons.coinsStack, label: "Upgrade: 4 → 10" },
    { action: incrementeUps, icon: UpgradeIcons.coin, label: "Upgrade Extra" },
    { action: incrementeUps, icon: UpgradeIcons.coinsStack, label: "Upgrade Extra" },
    { action: incrementeUps, icon: UpgradeIcons.coinsStack, label: "Upgrade Extra" },
    { action: incrementeUps, icon: UpgradeIcons.coin, label: "Upgrade Extra" },
    { action: incrementeUps, icon: UpgradeIcons.coinsStack, label: "Upgrade Extra" },
    { link: "/", icon: UpgradeIcons.goldSystem, label: "Gold System" },
  ];

  return (
    <BoxUp>
      <CardCenter>
        {upgrades.map((item, index) => (
          <div key={index}>
            {item.link ? (
              <Link to={item.link}>
                {item.icon.icon}
                <span>{item.label}</span>
              </Link>
            ) : (
              <button onClick={item.action}>
                {item.icon.icon}
                <span>{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </CardCenter>
    </BoxUp>
  );
}
