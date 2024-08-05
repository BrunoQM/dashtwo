import React from 'react';
import PageTitle from '../components/Typography/PageTitle';
import SectionTitle from '../components/Typography/SectionTitle';
import CTA from '../components/CTA';
import InfoCard from '../components/Cards/InfoCard';
import { Card, CardBody, Button, Input, Label, Select } from '@windmill/react-ui';
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons';
import RoundIcon from '../components/RoundIcon';

function Cards() {
  return (
    <>
      <PageTitle>Registrar GPS</PageTitle>

      <Card className="max-w-lg mx-auto mt-8">
        <CardBody>
          <form>
            <div className="mb-4">
              <Label>
                <span>Nombre del dispositivo</span>
                <Input className="mt-1" placeholder="Nombre del dispositivo" />
              </Label>
            </div>

            <div className="mb-4">
              <Label>
                <span>Proveedor</span>
                <Select className="mt-1">
                  <option value="petrack365">petrack365</option>
                  <option value="another_provider">another_provider</option>
                  {/* Add more options as needed */}
                </Select>
              </Label>
            </div>

            <div className="mb-4">
              <Label>
                <span>IMEI</span>
                <Input className="mt-1" placeholder="IMEI" />
              </Label>
            </div>

            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
              Registrar GPS
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
}

export default Cards;