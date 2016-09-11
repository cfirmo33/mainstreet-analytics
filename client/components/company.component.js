import React, { Component } from 'react';
import LineChart from './linechart.component';
import SentimentTrends from './sentiment.component';
import TwitterChart from './twitter.component';
import TwitterLive from './twitter-live.component';

class CompanyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // if (!this.props.companyGoogleTrendsData) {
    //   return (
    //     <div>Loading Company View data...</div>
    //   );
    // }

    return (
      <div className="container">

        <div className="row">
          <div className="section-headline col-md-12">
            <h3 className="ta-center">{this.props.currentCompany}</h3>
          </div>
        </div>

        {/*Loads Real-Time Company-Specific Twitter Data*/}

        <div className="row">
          <div className="col-md-4">
            <TwitterLive twitterData={this.props.twitterData} currentCompany={this.props.currentCompany}/>
          </div>
          <div className="col-md-8">
            <TwitterChart twitterData={this.props.twitterData} currentCompany={this.props.currentCompany}/>
          </div>
        </div>
      </div>

    );
  }
}

export default CompanyComponent;

// GoogleTrends API Current DOWN so component removed - code below


// Company Specific Google Trends component

// <div className="row">
// <LineChart
// data={this.props.companyGoogleTrendsData.searchVolume}
// keyword={this.props.companyGoogleTrendsData.keyword}
// x={'date'}
// y={'volume'}
// height={500}
// width={800}
// color={'red'}
// />
// </div>
