import FolderRedDark from '../../../images/profile/FolderRedDark.svg';
import FolderCard from './FolderCard';

function FolderRedDarkIcon({ title, value, label }) {
  return (
    <FolderCard
      image={FolderRedDark}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderRedDarkIcon;
