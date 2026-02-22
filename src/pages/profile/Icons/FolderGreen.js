import FolderGreenLight from '../../../images/profile/FolderGreenLight.svg';
import FolderCard from './FolderCard';

function FolderGreen({ title, value, label }) {
  return (
    <FolderCard
      image={FolderGreenLight}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderGreen;
