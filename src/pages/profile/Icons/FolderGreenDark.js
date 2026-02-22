import FolderGreenDark from '../../../images/profile/FolderGreenDark.svg';
import FolderCard from './FolderCard';

function FolderGreenDarkIcon({ title, value, label }) {
  return (
    <FolderCard
      image={FolderGreenDark}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderGreenDarkIcon;
