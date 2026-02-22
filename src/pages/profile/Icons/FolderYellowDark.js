import FolderYellowDark from '../../../images/profile/FolderYellowDark.svg';
import FolderCard from './FolderCard';

function FolderYellowDarkIcon({ title, value, label }) {
  return (
    <FolderCard
      image={FolderYellowDark}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderYellowDarkIcon;
