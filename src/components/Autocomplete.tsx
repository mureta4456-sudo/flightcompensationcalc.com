import React from 'react';
import Select from 'react-select';
import airports from '../data/airports.json';
import airlines from '../data/airlines.json';
import { Airport, Airline } from '../types';

interface AutocompleteProps {
  label: string;
  type: 'airport' | 'airline';
  value: any;
  onChange: (val: any) => void;
  placeholder?: string;
  id?: string;
}

export default function Autocomplete({ label, type, value, onChange, placeholder, id }: AutocompleteProps) {
  const options = type === 'airport' 
    ? airports.map((a: Airport) => ({
        value: a,
        label: `${a.city} (${a.code}) - ${a.name}`,
        search: `${a.city} ${a.code} ${a.name} ${a.country}`.toLowerCase()
      }))
    : airlines.map((a: Airline) => ({
        value: a,
        label: a.name,
        search: a.name.toLowerCase()
      }));

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: '#e2e8f0',
      '&:hover': { borderColor: '#1E3A8A' },
      boxShadow: 'none',
      borderRadius: '0.5rem',
      padding: '2px',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f1f5f9' : 'white',
      color: '#0f172a',
    })
  };

  const filterOptions = (candidate: any, input: string) => {
    if (input) {
      return candidate.data.search.includes(input.toLowerCase());
    }
    return true;
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <Select
        id={id}
        options={options}
        value={value ? { value, label: type === 'airport' ? `${(value as Airport).city} (${(value as Airport).code})` : (value as Airline).name } : null}
        onChange={(opt: any) => onChange(opt?.value)}
        placeholder={placeholder}
        isClearable
        styles={customStyles}
        className="text-sm"
        filterOption={filterOptions}
        captureMenuScroll={false}
        maxMenuHeight={250}
        // Limit results to 50 for performance
        onInputChange={(val) => {
          if (val.length < 2) return; // Don't show everything immediately
        }}
      />
    </div>
  );
}
