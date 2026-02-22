import FolderBlueLight from '../../../images/profile/FolderBlueLight.svg';
import FolderCard from './FolderCard';

function FolderBlue({ title, value, label }) {
  return (
    <FolderCard
      image={FolderBlueLight}
      title={title}
      value={value}
      label={label}
    />
  );
}

export default FolderBlue;
