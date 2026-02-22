import dayjs from 'utils/dayjs';
import Box from '@mui/material/Box';
import { Link as LinkMaterial } from '../../../../components/Wrappers';

function truncateText(value, maxLength = 30) {
  if (!value) {
    return '';
  }

  const stringValue = String(value);

  if (stringValue.length <= maxLength) {
    return stringValue;
  }

  return `${stringValue.slice(0, Math.max(0, maxLength - 3))}...`;
}

function imageFormatter(cell) {
  const images = cell?.image || cell?.avatar;
  const imageUrl = images && images.length ? images[0].publicUrl : undefined;

  if (!imageUrl) return null;

  return (
    <Box
      component='img'
      sx={{
        height: 45,
        width: 45,
        borderRadius: '50%',
      }}
      alt='avatar'
      src={imageUrl}
    />
  );
}

function booleanFormatter(cell) {
  return cell ? 'Yes' : 'No';
}

function dateTimeFormatter(cell) {
  return cell ? dayjs(cell).format('YYYY-MM-DD HH:mm') : null;
}

function filesFormatter(cell) {
  return (
    <div>
      {cell &&
        cell.map((value) => {
          return (
            <div key={value.id}>
              <a
                href={value.publicUrl}
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                {truncateText(value.name)}
              </a>
            </div>
          );
        })}
    </div>
  );
}

function listFormatter(cell, navigate, entity) {
  if (!cell) return null;

  const getContent = (id, title) => (
    <div key={id}>
      <LinkMaterial
        href='#'
        color={'primary'}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/app/${entity}/${id}/edit`);
        }}
      >
        {title}
      </LinkMaterial>
    </div>
  );

  return (
    <div>
      {cell &&
        cell.length &&
        cell.map((value) => getContent(value.id, value.firstName))}
      {cell && getContent(cell.id, cell.firstName)}
    </div>
  );
}

export {
  booleanFormatter,
  imageFormatter,
  dateTimeFormatter,
  listFormatter,
  filesFormatter,
};
