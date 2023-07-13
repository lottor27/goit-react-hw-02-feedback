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
      <FeedBack title="Upload stats"
        good = {0}
          neutral = {0} bad = {0} 
      />
      
      
    </div>
  );
};
