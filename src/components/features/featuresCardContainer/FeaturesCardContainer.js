import FeatureCard from "./featuresCard/FeatureCard";
import styles from "./featuresCardContainer.module.scss";
const FeaturesCardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
  );
};

export default FeaturesCardContainer;
