import React, {useEffect} from 'react';
import './homeSelect.scss';
import SelectHeader from './SelectHeader';
import {staggerPositionParts} from '../../../anime/position';

const SelectDifficulty = props => {

    useEffect(() => {
        let positionProp1 = {
            animatedClass: '.homeSelectDifficulty button svg',
            translateX: [-30, 0],
            translateY: [0, 0],
            delayPerChild: 500
        }

        let positionProp2 = {
            animatedClass: '.homeSelectDifficulty button',
            translateY: [1, -1],
            translateX: [0, 0],
            delayPerChild: 200,
            endDelay: 1500,
            opacity: [1, 1],
            direction: 'alternate',
            loop: true
        }
        staggerPositionParts(positionProp1);
        staggerPositionParts(positionProp2);
    });

    return(
        <div className='homeSelectDifficulty'>
            <div className='homeSelectDifficultyHeader'>
                <SelectHeader goBack={props.goBackSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
    <g fill="#5A24B2">
      <path d="M345.983 56.157v16.104h-13.551c-1.76 0-2.904 1.584-2.377 3.256l6.953 22.175c3.52 11.439-6.513 20.151-17.424 20.151H304.36v-16.104H318c1.848 0 2.904-1.584 2.375-3.256l-6.863-22.175c-3.52-11.528 6.424-20.151 17.424-20.151h15.047zM371.769 117.843c-10.296 0-18.656-8.359-18.656-18.655V74.813c0-10.296 8.36-18.655 18.656-18.655h25.079v16.104h-25.079a2.555 2.555 0 00-2.553 2.552v4.136h27.632v16.104h-27.632v4.136a2.555 2.555 0 002.553 2.552h25.079v16.104h-25.079zM420.784 56.245v42.942a2.555 2.555 0 002.553 2.552h20.326v16.104h-20.326c-10.297 0-18.656-8.359-18.656-18.655V56.245h16.103zM469.8 117.843c-10.296 0-18.656-8.359-18.656-18.655V74.813c0-10.296 8.36-18.655 18.656-18.655h25.079v16.104H469.8a2.555 2.555 0 00-2.553 2.552v4.136h27.632v16.104h-27.632v4.136a2.555 2.555 0 002.553 2.552h25.079v16.104H469.8zM521.455 117.843c-10.295 0-18.655-8.359-18.655-18.655V74.813c0-10.296 8.36-18.655 18.655-18.655h25.08v16.104h-25.08a2.554 2.554 0 00-2.552 2.552v24.375a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08zM553.751 71.82V56.245h42.415V71.82h-13.111v46.022h-16.104V71.82h-13.2z"/>
    </g>
    <g fill="#5A24B2">
      <path d="M628.9 117.843V56.157h33.087c10.296 0 18.655 8.359 18.655 18.655v24.375c0 10.296-8.359 18.655-18.655 18.655l-33.087.001zm16.104-16.104h16.983a2.554 2.554 0 002.552-2.552V74.813a2.554 2.554 0 00-2.552-2.552h-16.983v29.478zM704.844 56.245v61.598H688.74V56.245h16.104zM712.764 117.843v-43.03c0-10.296 8.36-18.655 18.655-18.655h22.615v16.104h-22.615a2.554 2.554 0 00-2.552 2.552v4.136h25.167v16.104h-25.167v22.791h-16.103zM761.515 117.843v-43.03c0-10.296 8.36-18.655 18.655-18.655h22.615v16.104H780.17a2.554 2.554 0 00-2.552 2.552v4.136h25.167v16.104h-25.167v22.791h-16.103zM826.546 56.245v61.598h-16.104V56.245h16.104zM853.209 117.843c-10.295 0-18.655-8.359-18.655-18.655V74.813c0-10.296 8.36-18.655 18.655-18.655h25.08v16.104h-25.08a2.554 2.554 0 00-2.552 2.552v24.375a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08zM937.863 56.245v42.942c0 10.296-8.359 18.655-18.655 18.655h-14.432c-10.295 0-18.655-8.359-18.655-18.655V56.245h16.104v42.942a2.554 2.554 0 002.552 2.552h14.432a2.554 2.554 0 002.552-2.552V56.245h16.102zM961.888 56.245v42.942a2.554 2.554 0 002.552 2.552h20.328v16.104H964.44c-10.295 0-18.655-8.359-18.655-18.655V56.245h16.103zM981.513 71.82V56.245h42.415V71.82h-13.111v46.022h-16.104V71.82h-13.2zM1076.286 82.556c-1.848 6.688-6.071 11.088-11.088 13.288v21.999h-16.104V95.668c-5.016-2.2-9.239-6.601-11.087-13.112l-7.48-26.311h16.808l6.424 22.703c1.056 3.168 5.456 4.136 6.776 0l6.335-22.703h16.808l-7.392 26.311z"/>
    </g>
</svg>
                </SelectHeader>
            </div>
            <div className='homeSelectDifficultyLayout'>
                <div className='homeSelectDifficultyOptions'>
                    <div>
                        <button onClick={props.simpleSelected} className='homeSelectDifficultyTop'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1824 309">
        <g>
        <path opacity=".8" fill="#D3FF78" d="M743.229 122.2c.463 8.92-4.021 16.099-8.15 23.598-5.43 9.867-10.738 19.852-17.482 28.906-6.262 8.409-13.939 18.879-24.377 22.052-8.393 2.606-18.193 1.483-23.744-5.968-13.675-18.358 9.443-37.726 22.83-47.299 8.994-6.432 18.756-11.721 28.334-17.212 2.548-1.464 22.086-12.014 22.589-4.077z"/>
        <path fill="#5A24B3" d="M677.114 169.149c-11.409 10.457 4.807 28.154 16.215 17.694 11.413-10.453-4.801-28.147-16.215-17.694-4.885 4.478 4.889-4.476 0 0z"/>
        <path fill="#78B300" d="M841.962 86.386c5.63-1.861 11.152-1.626 16.607.344.838.299 6.273 1.99 5.318 3.506-1.295 2.063-9.824-.021-11.566-.369l.527.055c-3.182.076-6.396-.11-9.512-.781-.867-.188-3.962-1.877-1.374-2.755.904-.299-.367.125 0 0zM776.817 99.297c2.859.655 5.605 1.759 8.291 2.917l-.742-.303c4.962 1.398 10.236 2.639 14.914 4.85 3.297 1.558 10.283 5.021 8.865 9.645-1.85 6.025-10.006 1.592-13.529.109l.742.303c-4.793-1.352-9.752-2.611-14.316-4.63-2.871-1.27-5.666-3.138-8.072-5.154-3.5-2.937-.573-8.739 3.847-7.737 1.458.334-1.572-.357 0 0z"/>
        <path fill="#ACFF00" d="M775.856 101.231c2.744.976 5.408 2.178 8.049 3.399l-.371-.151c6.331 1.897 12.775 3.545 18.514 6.885 1.273.732 7.947 4.602 3.227 6.149-2.443.802-7.288-2.415-9.456-3.417l.372.152c-4.847-1.452-10.076-2.689-14.689-4.782-2.568-1.37-5.135-2.769-7.568-4.368-2.129-1.397-.398-4.692 1.922-3.867 1.379.491-.923-.328 0 0z"/>
        <path fill="#78B300" d="M805.526 113.957c4.607-10.83 12.268-18.938 22.637-24.354l-1.105.93c3.156-2.36 6.765-4.613 10.637-5.549 5.264-1.269 7.809 4.08 6.314 8.336-3.074 9.016-10.458 14.264-18.507 18.701l1.216-1.043c-3.843 3.183-7.922 6.21-12.306 8.611-4.09 2.265-11.595.824-8.886-5.632.295-.69-.543 1.296 0 0z"/>
        <path fill="#ACFF00" d="M806.639 115.027c5.868-10.4 12.866-17.276 23.079-23.218l-.75.631c2.553-2.12 7.947-7.113 11.646-6.603 5.858.809 1.522 7.585-.123 10.031-4.172 6.245-10.216 10.096-16.543 13.944l.824-.708c-2.664 2.321-5.352 4.613-8.171 6.746-1.812 1.37-4.534 4.14-6.957 4.192-2.561.059-4.261-2.778-3.005-5.015.712-1.262-.579 1.031 0 0z"/>
        <path fill="#78B300" d="M745.161 130.862c.507 9.314-.771 18.74-.887 28.063-.197 11.442-.439 22.776-3.066 33.971-2.154 9.177-6.695 17.567-15.454 21.956-6.987 3.501-15.376 2.986-20.227-3.835-10.858-15.271 2.493-40.489 9.263-54.647 4.369-9.137 7.95-19.311 13.467-27.826 4.389-6.773 16.365-8.282 16.904 2.318z"/>
        <path fill="#ACFF00" d="M743.206 130.338c-.391 8.409-1.471 16.775-1.992 25.179-.717 11.551-.996 23.135-3.641 34.458-1.734 8.138-4.584 15.831-10.969 21.519-5.084 4.563-12.939 7.229-18.043.924-10.737-13.265 2.476-40.342 8.244-52.771 4.355-9.654 8.301-19.542 12.891-29.084 1.246-2.686 2.688-5.799 5.844-6.572 3.975-.974 7.871 2.264 7.666 6.347z"/>
        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M725.296 146.801c4.896 8.909 14.486 2.495 16.982-4.344m-23.25 17.988c5.516 12.132 18.75 5.705 22.229-4.181m-28.133 18.482c5.908 15.375 23.041 7.325 27.111-4.667m-32.029 21.222c8.041 16.084 26.739 5.652 31.01-7.414"/>
        <path fill="#78B300" d="M786.552 86.339c-2.121 6.177-5.47 11.893-8.969 17.373-3.729 5.841-10.947 10.2-16.209 14.617-4.746 3.983-24.608 26.029-30.461 13.311-2.607-5.667 3.213-9.936 6.617-13.504 6.627-6.945 13.133-14.012 19.677-21.036 5.41-5.808 9.978-10.522 17.043-14.606 2.391-1.473 5.708-3.92 8.699-3.246 3.148.706 4.808 4.135 3.603 7.091z"/>
        <path fill="#ACFF00" d="M785.704 85.491c-6.141 13.268-15.3 21.701-26.061 31.108-5.896 5.155-11.802 10.294-17.766 15.37-4.154 3.537-12.201 1.239-9.451-5.356 1.641-3.935 6.756-7.51 9.6-10.444 6.084-6.277 12.168-12.553 18.249-18.833 5.142-5.356 10.794-10.083 16.817-14.443 1.723-1.246 3.898-3.507 6.269-3.009 2.566.539 3.539 3.42 2.343 5.607z"/>
        <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M753.034 249.08l1.957 6.795M753.372 241.712l-.338 7.368"/>
        <path fill="#78B300" d="M741.749 154.466c2.6 3.662 3.969 8.841 3.564 13.313-.291 3.52-4.707 5.321-7.068 2.4-3.023-2.616-3.897-9.634-3.564-13.315.295-3.517 4.705-5.322 7.068-2.398z"/>
        <path fill="#ACFF00" d="M739.784 154.955c1.609 3.698 2.645 7.732 3.23 11.716.234 1.527-1.203 6.432-2.805 3.019-2.168-1.509-2.879-9.315-3.23-11.717-.234-1.527 1.205-6.431 2.805-3.018z"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M742.726 173.262l12.658 29.824"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M742.726 173.262l12.658 29.824"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M757.024 206.952l-3.386 32.222"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M757.024 206.952l-3.386 32.222"/>
        <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M753.763 225.145l1.957 6.793M754.101 217.776l-.338 7.369"/>
        <path fill="#78B300" d="M748.65 131.235c1.265 4.309.878 9.654-.965 13.748-1.422 3.233-6.181 3.5-7.464-.031-2.006-3.457-.551-10.379.965-13.748 1.422-3.233 6.182-3.5 7.464.031z"/>
        <path fill="#ACFF00" d="M746.633 131.06c.319 4.02-.017 8.172-.76 12.129-.276 1.518-3.232 5.688-3.634 1.939-1.559-2.131.312-9.742.76-12.129.275-1.518 3.232-5.687 3.634-1.939z"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M743.454 149.326l12.658 29.824"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M743.454 149.326l12.658 29.824"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M757.755 183.016l-3.389 32.222"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M757.755 183.016l-3.389 32.222"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="7.2" strokeLinecap="round" strokeMiterlimit="10" d="M786.077 80.1l-2.547 2.545"/>
        <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M702.866 242.626l-3.648 6.057M704.446 235.422l-1.58 7.204"/>
        <path fill="#78B300" d="M740.409 155.004c.578 4.452-.645 9.672-3.102 13.429-1.91 2.971-6.653 2.491-7.367-1.197-1.441-3.728 1.077-10.341 3.103-13.431 1.907-2.974 6.653-2.488 7.366 1.199z"/>
        <path fill="#ACFF00" d="M738.444 154.514c-.314 4.021-1.293 8.069-2.646 11.862-.51 1.457-4.079 5.114-3.893 1.349-1.207-2.35 1.83-9.575 2.646-11.862.511-1.458 4.083-5.114 3.893-1.349z"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M732.446 172.06l-19.947 25.53"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M732.446 172.06l-19.947 25.53"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M709.915 200.9l-5.068 32.002"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M709.915 200.9l-5.068 32.002"/>
        <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M735.612 225.217l-1.355 6.939M734.634 217.906l.978 7.311"/>
        <path fill="#78B300" d="M741.252 130.069c1.996 4.024 2.536 9.354 1.437 13.709-.838 3.43-5.48 4.519-7.355 1.264-2.578-3.058-2.342-10.125-1.438-13.709.837-3.43 5.482-4.52 7.356-1.264z"/>
        <path fill="#ACFF00" d="M739.234 130.245c1.013 3.904 1.403 8.052 1.358 12.078-.008 1.543-2.195 6.164-3.242 2.543-1.905-1.83-1.385-9.65-1.357-12.078.008-1.543 2.194-6.164 3.241-2.543z"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M739.274 148.788l-10.011 30.814"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M739.274 148.788l-10.011 30.814"/>
        <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M727.964 183.597l6.182 31.804"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M727.964 183.597l6.182 31.804"/>
        <path fill="#78B300" d="M801.612 160.465c1.764 5.663 1.432 11.18-.635 16.601-.313.832-2.1 6.236-3.598 5.256-2.041-1.336.194-9.82.572-11.559l-.064.527c-.021-3.183.223-6.394.946-9.498.203-.865 1.946-3.932 2.779-1.327.284.909-.119-.37 0 0zM768.522 92.214c.863 2.803 1.279 5.734 1.62 8.639l-.108-.795c1.266 4.982 2.893 10.207 3.328 15.342.309 3.621.672 11.431-3.986 12.5-6.144 1.411-6.388-7.867-6.865-11.662l.109.795c-1.227-4.826-2.615-9.752-3.148-14.715-.336-3.121-.117-6.475.428-9.566.792-4.501 7.281-4.867 8.622-.538.441 1.43-.476-1.539 0 0z"/>
        <path fill="#ACFF00" d="M766.367 92.349c.526 2.865.817 5.773 1.081 8.672l-.055-.398c1.522 6.432 3.318 12.838 3.294 19.476.003 1.469-.012 9.186-3.712 5.87-1.916-1.716-1.554-7.52-1.77-9.898l.055.398c-1.166-4.924-2.709-10.072-3.203-15.113-.098-2.908-.17-5.83-.002-8.738.147-2.543 3.868-2.691 4.312-.269.265 1.439-.177-.964 0 0z"/>
        <path fill="#78B300" d="M772.173 125.441c11.059 4.032 19.553 11.259 25.506 21.329l-.987-1.055c2.521 3.026 4.962 6.513 6.097 10.331 1.543 5.192-3.666 8.007-7.994 6.742-9.163-2.603-14.789-9.695-19.643-17.503l1.105 1.16c-3.379-3.672-6.614-7.587-9.242-11.838-2.475-3.962-1.43-11.538 5.158-9.166.706.257-1.322-.475 0 0z"/>
        <path fill="#ACFF00" d="M771.163 126.606c10.691 5.318 17.924 11.943 24.392 21.832l-.669-.716c2.25 2.438 7.518 7.563 7.201 11.284-.5 5.893-7.494 1.918-10.023.402-6.454-3.838-10.615-9.673-14.789-15.79l.75.786c-2.457-2.539-4.887-5.102-7.164-7.807-1.463-1.736-4.37-4.311-4.551-6.727-.19-2.555 2.553-4.399 4.853-3.264 1.297.647-1.059-.523 0 0z"/>
        <path fill="#78B300" d="M793.843 77.074c6.139-6.14 13.654 2.041 7.846 7.847-5.807 5.807-13.985-1.707-7.846-7.847 2.58-2.58-2.58 2.58 0 0z"/>
        <path fill="#5A24B3" d="M798.753 81.986c-1.643 1.646.9 4.19 2.547 2.545 1.645-1.645-.901-4.19-2.547-2.545-.701.703.703-.703 0 0z"/>
        <path opacity=".5" fill="#D3FF78" d="M797.87 79.4c1.914-1.914 4.253.841 2.547 2.545-1.706 1.706-4.46-.632-2.547-2.545z"/>
        <path fill="none" stroke="#78B300" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M798.366 68.029c1.236-5.618 3.08-8.755 7.459-12.492M795.952 65.617c1.236-5.618 3.083-8.754 7.459-12.492"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M800.993 75.095c-.35 3.577-3.635 7.892-5.107 11.289"/>
        <path fill="#78B300" d="M777.243 84.146c-3.002-4.43 2.921-19.477 7.324-21.874 6.752-3.674 17.57 6.444 16.352 13.361-.713 4.051-4.609 10.633-6.73 14.332-1.033 1.803-4.354 6.6-6.992 4.281-3.134-2.757-7.635-6.681-9.954-10.1-.695-1.027.93 1.372 0 0z"/>
        <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M779.56 72.133c4.233 4.233 12.686-2.748 10.455-7.768"/>
        <path fill="#78B300" d="M787.761 70.993c6.141-6.139-2.039-13.653-7.846-7.847-5.807 5.808 1.707 13.986 7.846 7.847 2.58-2.579-2.578 2.579 0 0z"/>
        <path fill="#5A24B3" d="M782.851 66.082c-1.646 1.646-4.191-.9-2.547-2.546 1.646-1.645 4.191.901 2.547 2.546z"/>
        <path opacity=".5" fill="#D3FF78" d="M785.437 66.966c1.912-1.914-.84-4.251-2.545-2.546-1.706 1.706.631 4.46 2.545 2.546.773-.775-.774.774 0 0z"/>
        <path fill="#ACFF00" d="M788.118 91.825c-1.865-1.821-3.398-3.956-5.236-5.794-3.541-3.548-4.496-3.497-3.078-8.655.672-2.449 3.237-1.73 5.25-2.271 3.78-1.017 6.193-3.891 7.33-7.545.878-2.826 4.458 2.641 4.976 3.436 2.662 4.092-.348 6.693-1.94 10.426-.54 1.259-5.194 12.46-7.302 10.403z"/>
        <path opacity=".8" fill="#D3FF78" d="M739.628 122.87c-2.015 8.701-8.307 14.363-14.34 20.435-7.939 7.987-15.795 16.123-24.771 22.969-8.339 6.358-18.604 14.305-29.513 14.479-9.202.201-18.698-4.015-21.557-13.389-6.464-21.197 19.972-32.596 35.36-38.067 10.416-3.704 21.258-6.099 31.98-8.736 2.854-.705 24.543-5.461 22.841 2.309z"/>
        <path fill="#5A24B3" d="M675.396 171.451c-13.053 8.313-25.948-11.929-12.895-20.242 13.053-8.316 25.945 11.923 12.895 20.242-5.59 3.56 5.589-3.562 0 0z"/>
        <g>
            <path fill="#5A24B2" d="M861.21 79.108c0 3.3-2.7 6-6 6h-18c-3.3 0-6-2.7-6-6v-18c0-3.3 2.7-6 6-6h18c3.3 0 6 2.7 6 6v18z"/>
            <path fill="none" stroke="#5A24B2" strokeWidth="3" strokeMiterlimit="10" d="M861.21 79.108c0 3.3-2.7 6-6 6h-18c-3.3 0-6-2.7-6-6v-18c0-3.3 2.7-6 6-6h18c3.3 0 6 2.7 6 6v18z"/>
        </g>
        </g>
        <g fill="#ACFF00">
        <path d="M980.814 139.396v8.054h-6.777c-.88 0-1.451.792-1.188 1.628l3.477 11.09c1.76 5.721-3.257 10.077-8.713 10.077H960v-8.053h6.82c.924 0 1.452-.793 1.188-1.629l-3.433-11.089c-1.76-5.766 3.213-10.078 8.713-10.078h7.526zM992.518 139.44v30.805h-8.054V139.44h8.054zM1014.166 160.563h.397l1.451-14.83c.925-9.901 16.238-8.933 16.238.792v23.72h-8.053v-19.847l.176-5.104-.396-.044-.704 4.973-1.32 9.989c-1.188 9.373-13.994 9.373-15.227 0l-1.275-9.989-.748-4.973-.396.044.22 5.104v19.847h-8.053v-23.72c0-9.725 15.271-10.693 16.238-.792l1.452 14.83zM1045.624 165.272v-8.054h7.218c.703 0 1.275-.571 1.275-1.275v-7.218c0-.704-.572-1.275-1.275-1.275h-7.218c-.704 0-1.276.571-1.276 1.275v21.52h-8.053v-21.52c0-5.148 4.181-9.329 9.329-9.329h7.218c5.148 0 9.328 4.181 9.328 9.329v7.218c0 5.148-4.18 9.329-9.328 9.329h-7.218zM1074.135 139.44v21.476c0 .704.572 1.276 1.277 1.276h10.165v8.053h-10.165c-5.149 0-9.33-4.181-9.33-9.329V139.44h8.053zM1098.644 170.245c-5.149 0-9.329-4.181-9.329-9.329v-12.19c0-5.148 4.18-9.329 9.329-9.329h12.542v8.054h-12.542c-.704 0-1.276.571-1.276 1.275v2.068h13.818v8.054h-13.818v2.068c0 .704.572 1.276 1.276 1.276h12.542v8.053h-12.542z"/>
        </g>
    </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={props.hardSelected} className='homeSelectDifficultyBottom'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1824 309">
    <g>
      <path opacity=".8" fill="#D3FF78" d="M777.58 138.326c-7.956-4.055-11.931-11.535-16.36-18.857-5.831-9.635-11.822-19.227-16.292-29.594-3.87-8.973-8.776-20.076-7.31-30.025 1.336-9.057 7.109-18.068 16.718-19.592 23.142-3.666 28.669 26.898 30.271 43.322 1.073 11.004.771 22.104.738 33.145-.007 2.937-.639 25.134-7.765 21.601z"/>
      <path fill="#5A24B3" d="M769.979 57.594c-3.351-15.109-26.785-9.914-23.432 5.195 3.35 15.111 26.78 9.916 23.432-5.195-1.435-6.469 1.434 6.47 0 0z"/>
      <path fill="#78B300" d="M859.923 233.516c.709 6.428-.979 12.105-4.541 17.324-6.084 8.916-2.534-4.389-1.019-7.914l-.163.504c.586-3.127 1.438-6.232 2.742-9.141.364-.81 2.661-3.488 2.981-.773.103.947-.046-.385 0 0zM823.103 164.156c2.592 1.371 4.959 3.15 7.253 4.963l-.639-.484c4.431 2.635 9.204 5.199 13.151 8.545 2.781 2.357 8.633 7.514 6.066 11.611-3.346 5.342-10.077-1.055-13.098-3.396l.641.484c-4.28-2.545-8.744-5.047-12.631-8.178-2.444-1.971-4.661-4.496-6.463-7.068-2.62-3.742 1.71-8.586 5.72-6.477 1.321.699-1.427-.75 0 0z"/>
      <path fill="#ACFF00" d="M821.673 165.775c2.397 1.654 4.66 3.506 6.896 5.367l-.319-.242c5.624 3.471 11.423 6.73 16.1 11.441 1.041 1.037 6.486 6.504 1.526 6.777-2.567.141-6.417-4.221-8.25-5.75l.319.244c-4.305-2.656-9.036-5.207-12.95-8.422-2.126-1.986-4.243-4.004-6.181-6.178-1.694-1.899.832-4.631 2.859-3.237 1.205.832-.807-.554 0 0z"/>
      <path fill="#78B300" d="M854.13 188.529c7.074 9.406 10.269 20.09 9.775 31.779l-.253-1.42c.463 3.91.614 8.164-.515 11.984-1.535 5.195-7.436 4.719-10.376 1.301-6.271-7.174-7.12-16.188-6.942-25.379l.295 1.574c-.949-5.602-1.684-11.494-1.208-17.18.388-4.624 6.446-6.319 9.224-2.659.451.6-.85-1.119 0 0z"/>
      <path fill="#ACFF00" d="M852.647 188.957c6.072 10.285 8.527 19.777 8.568 31.594l-.172-.963c.561 3.27 2.186 10.438-.105 13.385-3.63 4.67-7.332-2.473-8.625-5.121-3.322-6.736-3.636-13.895-3.805-21.299l.199 1.068c-.678-3.469-1.318-6.941-1.756-10.449-.281-2.254-1.317-5.996-.152-8.121 1.233-2.246 4.54-2.301 5.848-.094.737 1.248-.603-1.018 0 0z"/>
      <path fill="#78B300" d="M781.159 145.988c-7.812 5.1-16.617 8.703-24.748 13.266-10.007 5.551-19.94 11.006-30.953 14.328-9.022 2.725-18.563 2.986-26.741-2.404-6.524-4.303-10.274-11.822-6.792-19.436 7.796-17.037 36.312-18.086 51.958-19.301 10.62-.824 21.398-2.488 32.056-2.188 8.035.483 13.074 10.655 5.22 15.735z"/>
      <path fill="#ACFF00" d="M780.636 144.033c-7.478 3.867-15.264 7.115-22.801 10.865-10.36 5.154-20.534 10.713-31.663 14.076-7.913 2.57-16.004 3.943-24.121 1.26-6.495-2.121-12.729-7.594-9.821-15.164 6.12-15.932 36.176-18.025 49.824-19.246 10.539-1.055 21.074-2.586 31.633-3.377 2.948-.266 6.367-.574 8.613 1.773 2.83 2.956 1.974 7.95-1.664 9.813z"/>
      <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M757.423 136.756c-5.236 8.703 5.063 13.795 12.254 12.533m-27.205-11.139c-7.779 10.836 4.455 19.084 14.736 17.16m-30.074-15.124c-10.328 12.881 5.137 23.625 17.6 21.146m-34.395-17.127c-10.049 15.166 8.574 25.963 21.926 23.148"/>
      <path fill="#78B300" d="M832.782 174.723c-6.515-.449-12.904-2.205-19.104-4.166-6.606-2.092-12.685-7.936-18.314-11.875-5.075-3.553-31.511-17.033-20.74-25.977 4.799-3.986 10.428.529 14.756 2.895 8.425 4.604 16.934 9.061 25.413 13.563 7.009 3.723 12.749 6.912 18.519 12.682 2.043 1.926 5.264 4.5 5.389 7.563.13 3.221-2.751 5.713-5.919 5.315z"/>
      <path fill="#ACFF00" d="M833.382 173.684c-14.406-2.494-24.922-9.162-36.794-17.121-6.505-4.361-12.997-8.734-19.444-13.182-4.092-2.82-4.828-10.018 1.555-10.545 3.826-.316 8.855 3.877 11.913 5.578 7.665 4.268 15.33 8.535 22.997 12.799 6.633 3.689 12.648 7.777 18.68 12.404 1.79 1.336 5.005 3.16 5.734 5.434.941 2.939-1.881 5.304-4.641 4.633z"/>
      <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M721.505 240.84l-3.648 6.056M723.086 233.635l-1.581 7.205"/>
      <path fill="#78B300" d="M763.192 155.859c-.514 3.975-2.631 7.996-5.283 10.963-2.47 2.758-8.369 3.426-7.994-1.859-.293-3.564 3.057-8.473 5.283-10.963 2.469-2.756 8.372-3.426 7.994 1.859z"/>
      <path fill="#ACFF00" d="M761.421 154.879c-1.094 3.096-2.648 6.041-4.368 8.832-.273.443-1.87 3.506-2.612 3.762-1.02 1.211-3.341.289-2.755-1.527-.469-2.039 3.376-7.221 4.368-8.832.273-.445 1.869-3.508 2.613-3.762 1.02-1.213 3.34-.289 2.754 1.527z"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M751.087 170.273l-19.947 25.532"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M751.087 170.273l-19.947 25.532"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M728.555 199.113l-5.07 32.002"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M728.555 199.113l-5.07 32.002"/>
      <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M742.888 230.813l-1.703 6.861M746.864 224.602l-3.976 6.211"/>
      <path fill="#78B300" d="M785.413 146.93c-.929 3.896-3.451 7.676-6.4 10.35-2.744 2.48-8.682 2.533-7.756-2.686.081-3.576 3.925-8.107 6.4-10.35 2.744-2.486 8.682-2.529 7.756 2.686z"/>
      <path fill="#ACFF00" d="M783.755 145.768c-1.412 2.965-3.267 5.73-5.268 8.326-.318.414-2.227 3.293-2.992 3.469-1.141 1.1-3.352-.063-2.58-1.807-.253-2.078 4.112-6.83 5.268-8.328.319-.414 2.226-3.291 2.992-3.467 1.139-1.1 3.353.06 2.58 1.807z"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M771.868 159.998l-3.949 32.156"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M771.868 159.998l-3.949 32.156"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M767.407 196.324l-19.045 26.211"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M767.407 196.324l-19.045 26.211"/>
      <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M699.903 228.369l-5.09 4.906M703.295 221.82l-3.392 6.549"/>
      <path fill="#78B300" d="M758.847 153.449c-.516 3.975-2.63 7.998-5.283 10.965-2.469 2.758-8.37 3.426-7.996-1.859-.292-3.564 3.057-8.475 5.283-10.963 2.468-2.76 8.37-3.426 7.996 1.857z"/>
      <path fill="#ACFF00" d="M757.075 152.469c-1.096 3.096-2.648 6.041-4.369 8.834-.273.443-1.869 3.506-2.611 3.762-1.021 1.211-3.342.289-2.756-1.527-.469-2.039 3.376-7.223 4.369-8.834.273-.443 1.869-3.508 2.611-3.762 1.021-1.213 3.342-.29 2.756 1.527z"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M746.74 167.863l-25.876 19.498"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M746.74 167.863l-25.876 19.498"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M717.511 189.891l-13.178 29.599"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M717.511 189.891l-13.178 29.599"/>
      <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M731.774 224.48l-2.295 6.688M736.276 218.639l-4.502 5.841"/>
      <path fill="#78B300" d="M780.362 143.391c-.929 3.898-3.45 7.678-6.4 10.352-2.744 2.482-8.684 2.531-7.757-2.686.083-3.576 3.926-8.107 6.399-10.35 2.745-2.486 8.683-2.533 7.758 2.684z"/>
      <path fill="#ACFF00" d="M778.703 142.229c-1.412 2.967-3.266 5.732-5.268 8.328-.319.414-2.226 3.293-2.991 3.469-1.141 1.1-3.354-.063-2.58-1.807-.254-2.078 4.111-6.83 5.268-8.328.318-.414 2.226-3.293 2.991-3.469 1.141-1.1 3.353.062 2.58 1.807z"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M766.817 156.461l-6.736 31.691"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M766.817 156.461l-6.736 31.691"/>
      <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M759.208 192.26l-21.256 24.453"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M759.208 192.26l-21.256 24.453"/>
      <path fill="#78B300" d="M845.88 165.277c6.139-6.141 13.652 2.039 7.846 7.846s-13.986-1.707-7.846-7.846c2.58-2.58-2.58 2.578 0 0z"/>
      <path fill="#5A24B3" d="M850.79 170.188c-1.643 1.646.902 4.193 2.547 2.547s-.9-4.192-2.547-2.547c-.701.703.704-.704 0 0z"/>
      <path opacity=".5" fill="#D3FF78" d="M849.908 167.602c1.914-1.912 4.251.842 2.546 2.547-1.707 1.705-4.458-.633-2.546-2.547.775-.774-.774.775 0 0z"/>
      <path fill="none" stroke="#78B300" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M850.403 156.232c1.235-5.619 3.082-8.754 7.459-12.492M847.99 153.818c1.236-5.617 3.083-8.752 7.458-12.49"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M853.03 163.297c-.35 3.578-3.635 7.893-5.107 11.289"/>
      <path fill="#78B300" d="M829.28 172.348c-3.003-4.428 2.923-19.477 7.324-21.871 6.752-3.676 17.57 6.441 16.352 13.359-.713 4.053-4.609 10.633-6.73 14.332-1.033 1.803-4.354 6.6-6.991 4.281-3.133-2.756-7.64-6.683-9.955-10.101-.695-1.026.93 1.373 0 0z"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M831.597 160.336c4.234 4.232 12.686-2.748 10.455-7.768"/>
      <path fill="#78B300" d="M839.798 159.195c6.141-6.139-2.039-13.652-7.846-7.846-5.806 5.805 1.707 13.985 7.846 7.846 2.58-2.58-2.579 2.58 0 0z"/>
      <path fill="#5A24B3" d="M834.888 154.285c-1.646 1.645-4.191-.9-2.547-2.547 1.646-1.646 4.191.901 2.547 2.547-.704.703.703-.703 0 0z"/>
      <path opacity=".5" fill="#D3FF78" d="M837.474 155.168c1.912-1.914-.839-4.25-2.545-2.545-1.707 1.705.631 4.457 2.545 2.545.773-.773-.774.773 0 0z"/>
      <path fill="#ACFF00" d="M840.155 180.027c-1.868-1.818-3.401-3.953-5.237-5.795-3.542-3.545-4.495-3.498-3.077-8.654.674-2.447 3.237-1.729 5.251-2.271 3.779-1.016 6.192-3.891 7.329-7.545.878-2.826 4.458 2.641 4.976 3.436 2.662 4.094-.348 6.695-1.941 10.426-.537 1.257-5.197 12.462-7.301 10.403-.183-.179.184.18 0 0z"/>
      <path fill="none" stroke="#ACFF00" strokeWidth="7.2" strokeLinecap="round" strokeMiterlimit="10" d="M838.114 168.303l-2.547 2.545"/>
      <path opacity=".8" fill="#D3FF78" d="M779.05 133.975c-2.604-8.543.01-16.594 2.202-24.867 2.88-10.889 5.616-21.861 9.968-32.277 3.772-9.029 8.309-20.232 16.522-26.115 7.442-5.332 17.937-7.438 25.706-1.584 18.711 14.098.566 39.307-10.135 51.867-7.17 8.416-15.36 15.914-23.328 23.557-2.119 2.034-18.523 17.001-20.935 9.419z"/>
      <path fill="#5A24B3" d="M810.386 59.787c7.149-13.727 28.437-2.645 21.289 11.082-7.147 13.729-28.434 2.647-21.289-11.082 3.062-5.879-3.059 5.879 0 0z"/>
      <g>
        <path fill="#5A24B2" d="M854.743 257.045c0 6.601-5.4 12-12 12h-36c-6.6 0-12-5.399-12-12v-36c0-6.601 5.4-12 12-12h36c6.6 0 12 5.399 12 12v36z"/>
        <path fill="none" stroke="#5A24B2" strokeWidth="6" strokeMiterlimit="10" d="M854.743 257.045c0 6.601-5.4 12-12 12h-36c-6.6 0-12-5.399-12-12v-36c0-6.601 5.4-12 12-12h36c6.6 0 12 5.399 12 12v36z"/>
      </g>
      <path fill="#78B300" d="M791.085 227.133c5.653 2.965 9.506 7.617 11.825 13.451 4.079 10.262-5.071-.377-7.13-3.582l.326.418c-1.938-1.912-3.755-3.975-5.293-6.223-.355-.539-2.914-5.709.272-4.064.843.441-.345-.178 0 0zM815.928 157.172c-1.371 2.592-3.149 4.959-4.962 7.252l.484-.639c-2.637 4.432-5.199 9.203-8.545 13.15-2.358 2.783-7.512 8.635-11.61 6.068-5.343-3.346 1.052-10.076 3.396-13.098l-.484.639c2.545-4.279 5.046-8.744 8.178-12.631 1.969-2.443 4.496-4.66 7.067-6.461 3.741-2.622 8.588 1.71 6.476 5.72-.699 1.32.751-1.428 0 0z"/>
      <path fill="#ACFF00" d="M814.309 155.742c-1.653 2.396-3.504 4.66-5.367 6.895l.242-.318c-3.47 5.623-6.729 11.424-11.44 16.1-1.037 1.039-6.503 6.488-6.776 1.527-.142-2.568 4.219-6.416 5.747-8.252l-.242.32c2.657-4.307 5.207-9.037 8.422-12.951 1.986-2.125 4.002-4.244 6.177-6.18 1.9-1.694 4.634.832 3.237 2.859-.831 1.205.555-.806 0 0z"/>
      <path fill="#78B300" d="M795.015 183.246c4.966 10.668 5.867 21.791 2.952 33.117l.049-1.443c-.358 3.922-1.096 8.115-2.995 11.615-2.582 4.766-8.253 3.066-10.42-.885-4.635-8.324-3.604-17.309-1.514-26.264l-.038 1.6c.235-5.676.745-11.594 2.39-17.057 1.341-4.441 7.619-4.839 9.576-.683.316.682-.6-1.271 0 0z"/>
      <path fill="#ACFF00" d="M793.476 183.355c3.801 11.318 4.23 21.121 1.811 32.686l.033-.979c-.133 3.314-.033 10.664-2.888 13.07-4.521 3.811-6.656-3.941-7.371-6.803-1.85-7.277-.667-14.346.708-21.621l-.027 1.086c.058-3.533.153-7.064.455-10.586.193-2.264-.042-6.139 1.539-7.975 1.671-1.94 4.917-1.307 5.74 1.122.461 1.375-.379-1.119 0 0z"/>
    </g>
    <g fill="#ACFF00">
      <path d="M968.053 139.822v11.396h8.538v8.055h-8.538v11.396H960v-30.848h8.053zm17.867 0v30.848h-8.053v-30.848h8.053zM997.93 153.641h8.537v8.053h-8.537v8.934h-8.053v-21.52c0-5.148 4.18-9.33 9.328-9.33h7.262c5.148 0 9.329 4.182 9.329 9.33v21.52h-8.054v-21.52c0-.705-.571-1.275-1.275-1.275h-7.262c-.703 0-1.275.57-1.275 1.275v4.533zM1031.723 163.232h-2.598v-8.053h7.481c.704 0 1.276-.572 1.276-1.275v-4.797c0-.705-.572-1.275-1.276-1.275h-7.481c-.703 0-1.32.57-1.32 1.275v21.52h-8.053v-21.52c0-5.148 4.225-9.33 9.373-9.33h7.218c5.148 0 9.593 4.182 9.593 9.33v4.797c0 2.508-1.012 4.445-3.212 5.721 1.804.527 2.332 2.111 2.64 3.785l1.145 7.217h-8.713l-1.232-6.602c-.176-.484-.527-.748-1.057-.793h-3.784zM1049.893 170.627v-30.85h16.545c5.149 0 9.33 4.182 9.33 9.33v12.189c0 5.148-4.181 9.33-9.33 9.33l-16.545.001zm8.052-8.053h8.492c.705 0 1.277-.572 1.277-1.277v-12.189c0-.705-.572-1.275-1.277-1.275h-8.492v14.741z"/>
    </g>
</svg>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDifficulty;