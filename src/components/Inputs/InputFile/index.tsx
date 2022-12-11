import React, { FC, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';
import colors from '../../../config/colors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

interface Props {
  onFileSelected: (file: File) => void,
  acceptedFileTypes : string;
  multiple?: boolean | false;
  maxFileSize?: number;
  text?: string;
  theme?: string;
  onFileError: (file: File) => void,
}

const InputFile: FC<Props> = ({onFileSelected, acceptedFileTypes, multiple, maxFileSize, text, theme, onFileError}) => {

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {

      file.slice( 0, 1 ) // only the first byte

      .arrayBuffer().then(() => {

        let reader: FileReader =  new FileReader();
        reader.readAsArrayBuffer(file)
        reader.onabort = () => console.log('file reading was aborted')

        reader.onerror = (evt: any) => {
          switch(evt.target.error.code) {
            case evt.target.error.NOT_FOUND_ERR:
              alert('File Not Found!');
              break;
            case evt.target.error.NOT_READABLE_ERR:
              alert('File is not readable');
              break;
            case evt.target.error.ABORT_ERR:
              break; // noop
            default:
              alert('An error occurred reading this file.');
        };

        onFileError(file)
      };

      reader.onloadstart = () => {
        console.log('loading start')
      }

      reader.onloadend = () => {
        console.log('loading end')
      }

      reader.onload = () => {
        console.log(reader.readyState)
        const binaryStr = reader.result
        console.log(binaryStr, 'bynary')
        onFileSelected(file);
        //reader.readAsDataURL(file);
      }

      reader.onprogress = (event) => {
        console.log(event.type, event.loaded)
      }
      // success, we should be able to send that File
      console.log( 'should be fine' );

    }).catch((err: any) => {
        // error while reading
        onFileError(file)
        console.log( 'failed to read' );
      });
    })
  }, [onFileError, onFileSelected])

  const {getRootProps, getInputProps, fileRejections} = useDropzone({onDrop, accept: acceptedFileTypes, multiple: multiple, maxSize: maxFileSize})

  const fileRejectionItems = fileRejections.map(({ file, errors }, i: number) => (
    <FileErrorMessage key={i}>
      {errors.map((error: any, i) => {

          if(error.code === 'file-invalid-type') {
            return (
              <p key={i} >{file.name} nije odgovarajućeg formata. Podržani formati su {acceptedFileTypes}</p>
            )
          }

          if(error.code === 'file-too-large' && maxFileSize) {
            return (
              <p key={i} >{file.name} prevazilazi ograničenje od {maxFileSize/1000}kb</p>
            )
          }

          return null;
        })
      }
    </FileErrorMessage>
  ));

  return (
    <>
      <InputFileWrapper {...getRootProps()} className={theme === 'white' ? 'whiteBg' : ''} >
        <input {...getInputProps()} />
        <span>+ {text ? text : <FormattedMessage {...messages.InsertImage} />}</span>

      </InputFileWrapper>
      {fileRejectionItems.length ? <ul>{fileRejectionItems}</ul> : null}
    </>
  )
}

const InputFileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 14px;
  font-size: 16px;
  background: ${colors.DARK_GRAY_COLOR};
  color: ${colors.TEXT_GRAY};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  border: 1px dashed #bfbfbf;
  transition: all 200ms ease-in-out;

  &:hover {
    border: 1px solid #bfbfbf;
  }

  p {
    color: ${colors.TEXT_SHADOW};
    margin-bottom: 10px;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  span {
    font-size: 16px;
    color: #1F69A4;
    margin: auto;
  }

  &.whiteBg {
    background: ${colors.WHITE};
  }
`;

const FileErrorMessage = styled.div`
  margin: 20px 0;
  p {
    color: ${colors.RED_COLOR} !important;
    font-size: 14px;
    margin: 0 0 4px;
  }
`;

export default InputFile;
