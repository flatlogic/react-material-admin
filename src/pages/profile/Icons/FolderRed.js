import FolderRedLight from '../../../images/profile/FolderRedLight.svg';
import FolderCard from './FolderCard';

function FolderRed({ title, value, label }) {
  return (
    <FolderCard
      image={FolderRedLight}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderRed;
