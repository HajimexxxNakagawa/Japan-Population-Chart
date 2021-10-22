import Loader from 'react-loader-spinner'

export const Spinner = () => (
  <div style={{ position: `absolute`, top: `50%`, left: `50%` }}>
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
)
