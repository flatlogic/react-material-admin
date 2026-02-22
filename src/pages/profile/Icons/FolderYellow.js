import FolderYellowLight from '../../../images/profile/FolderYellowLight.svg';
import FolderCard from './FolderCard';

function FolderYellow({ title, value, label }) {
  return (
    <FolderCard
      image={FolderYellowLight}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderYellow;
