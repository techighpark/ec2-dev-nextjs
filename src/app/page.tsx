import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">안녕하세요, 저는 [이름]입니다</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            프론트엔드 개발자 | UI/UX 디자이너
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              연락하기
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            저는 웹 개발과 디자인에 열정을 가진 개발자입니다. 사용자 경험을 최우선으로 생각하며,
            최신 기술 트렌드를 따라가며 지속적으로 성장하고 있습니다.
          </p>
        </section>

        {/* Skills Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design'].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
