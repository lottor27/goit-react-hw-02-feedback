import FeedBack from './Feedback/feedback';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedBack title="Upload stats" />
      React homework template feedback
      
    </div>
  );
};
