import { Component } from 'react';

class Prices extends Component {
  state = {
    currency: 'USD'
  };

  render() {
    let { currency } = this.state;

    if (!this.props.bpi[currency]) return <h3>No data for this currency</h3>;
    const { description, rate, code } = this.props.bpi[currency];

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {description} :{' '}
            <span className="badge badge-primary">{code}</span>{' '}
            <strong>{rate}</strong>
          </li>
        </ul>

        <select
          onChange={e =>
            this.setState({
              currency: e.target.value
            })
          }
          className="form-control mt-4"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    );
  }
}

export default Prices;
