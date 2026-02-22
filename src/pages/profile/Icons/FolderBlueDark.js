import FolderBlueDark from '../../../images/profile/FolderBlueDark.svg';
import FolderCard from './FolderCard';

function FolderBlueDarkIcon({ title, value, label }) {
  return (
    <FolderCard
      image={FolderBlueDark}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderBlueDarkIcon;
