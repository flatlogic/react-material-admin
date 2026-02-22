function FolderCard({ image, title, value, label }) {
  return (
    <div style={{ position: 'relative', width: 153, height: 115, marginRight: 8, flex: '0 0 auto' }}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        style={{ display: 'block', width: 153, height: 115, objectFit: 'cover', pointerEvents: 'none' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 12, color: '#fff' }}>
        <span style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</span>
        <p style={{ margin: 0 }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>{value}</span>{' '}
          <span style={{ fontSize: 10, fontWeight: 500 }}>{label}</span>
        </p>
      </div>
    </div>
  );
}

export default FolderCard;
