import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { SearchModalContext } from '../../contexts/SearchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchField from './SearchField';

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnFocus = () => {
    console.log('focussed');
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
      </div>
    </SearchModalStyles>
  );
}

export default Search;
