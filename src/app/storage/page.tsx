import {
  CookieNativeExample,
  LocalStorageExample,
  SessionStorageExample,
} from './storage-ui';

export default function StoragePage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Exemples de stockage</h1>
      <LocalStorageExample />
      {/* <SessionStorageExample /> */}
      {/* <CookieNativeExample /> */}
    </div>
  );
}
