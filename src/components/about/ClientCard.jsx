/* eslint-disable react/prop-types */

function ClientCard({ client }) {
  return (
    <div className="item">
      <a href="#">
        <img src={`/src/assets/${client}.png`} alt={client} width="100%" />
      </a>
    </div>
  );
}

export default ClientCard;
