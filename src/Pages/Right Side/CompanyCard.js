import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const CompanyCard = ({ data }) => {
  const {
    name,
    location,
    company_supplier_types,
    company_name,
    company_legal_names,
    main_country,
    short_description,
    main_business_category,
    primary_email,
    website_url,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
    youtube_url,
  } = data;
  if(data == null)
  return <></>;
  return (
    <Card>
      <CardContent>
        {name && (
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        )}
        {(company_name || main_country) && (
          <Typography variant="subtitle1" color="textSecondary">
            {company_name} - {main_country}
          </Typography>
        )}
        {short_description && (
          <Typography variant="body1" paragraph>
            {short_description}
          </Typography>
        )}
        {main_business_category && (
          <Typography variant="subtitle2" color="textSecondary">
            Business Category: {main_business_category}
          </Typography>
        )}
        {company_supplier_types && company_supplier_types.length > 0 && (
          <Typography variant="subtitle2" color="textSecondary">
            Supplier Types: {company_supplier_types.join(', ')}
          </Typography>
        )}
        {location && location.lat && location.lng && (
          <Typography variant="body2" color="textSecondary" paragraph>
            Location: {location.lat}, {location.lng}
          </Typography>
        )}

        {website_url && (
          <Button variant="outlined" color="primary" href={website_url} target="_blank">
            Visit Website
          </Button>
        )}

        {primary_email && (
          <Typography variant="body2" color="textSecondary" paragraph>
            Contact: {primary_email}
          </Typography>
        )}

        <div>
          {facebook_url && (
            <Link href={facebook_url} target="_blank" color="inherit" underline="hover">
              Facebook {" "}
            </Link>
          )}
          {twitter_url && (
            <Link href={twitter_url} target="_blank" color="inherit" underline="hover">
              Twitter{" "}
            </Link>
          )}
          {instagram_url && (
            <Link href={instagram_url} target="_blank" color="inherit" underline="hover">
              Instagram{" "}
            </Link>
          )}
          {linkedin_url && (
            <Link href={linkedin_url} target="_blank" color="inherit" underline="hover">
              LinkedIn{" "}
            </Link>
          )}
          {youtube_url && (
            <Link href={youtube_url} target="_blank" color="inherit" underline="hover">
              YouTube{" "}
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;