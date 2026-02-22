import { useTheme } from '@mui/material/styles';
import { Button } from "../../../components/Wrappers";

function DraggableStory() {
  const theme = useTheme();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          backgroundColor: theme.palette.primary.main,
          padding: 48,
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: '0.5rem',
            fontSize: '2.5rem',
            fontWeight: 400,
            color: '#fff',
          }}
        >
          Draggable story!
        </p>
        <p
          style={{
            marginTop: 0,
            marginBottom: '2rem',
            fontSize: '1.25rem',
            color: '#fff',
          }}
        >
          <i>Build</i> your own interfaces! Sit back and relax.
        </p>
        <div>
          <Button
            size="large"
            color="warning"
            variant="contained"
            style={{
              boxShadow: 'none',
              textTransform: 'none',
              fontSize: 20,
              padding: '6px 12px',
              border: '1px solid',
              lineHeight: 1.5,
            }}
          >
            Fullscreen me!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DraggableStory;
