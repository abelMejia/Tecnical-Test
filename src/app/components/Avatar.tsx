'use client';
function Avatar() {
  return  <div className="flex items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
      />

      <div>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Abel Mejía</p>
        <p className="text-xs text-gray-500">Web Developer</p>
      </div>
</div>
}

export default Avatar;
