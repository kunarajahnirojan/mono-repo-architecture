import moment from 'moment';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white p-3 justify-end flex">
      <div>
        <p className="text-xs text-gray-500">
          &copy; {moment(new Date()).format('YYYY')}. Telemedicine. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
