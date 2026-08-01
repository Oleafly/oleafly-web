---

title: "Oleafly'nin içindeki asistan"
description: "API anahtarınız, proje bağlamınız, farklarınız, derleme uyumlu düzenlemeleriniz."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Oleafly'nin içindeki asistan

Oleafly, ayrı bir sohbet penceresi yerine projenizin içinde çalışan bir AI asistanı içerir. LaTeX'i genel bir sohbet robotuna yapıştırmanın aksine, kendi API anahtarınızla çalışır, düzenlediği projeyi okuyabilir ve dosyalarınıza dokunmadan önce önerilen her değişikliği onay için gösterir.

## Anahtarınız, sağlayıcınız

Asistan, Oleafly sunucuları üzerinden hiçbir model çağrısı yapmaz. Desteklenen dokuz barındırılan sağlayıcıdan biri için bir API anahtarı sağlarsınız veya uygulamayı yerel bir Ollama kurulumuna yönlendirir ve kendi donanımınızda çalışan bir model kullanırsınız. İstekler, makinenizden yapılandırdığınız sağlayıcıya, o sağlayıcının şartlarına göre gider ve sağlayıcıya doğrudan onun tarifeleri üzerinden ödeme yaparsınız. Hangi modelin seçileceği ve bir anahtarın veya Ollama'nın nasıl kurulacağı [AI kurulumu](/docs/ai-setup/) bölümünde ele alınmaktadır.

## Asistanın görebileceği şeyler

Bir soru sorduğunuzda veya bir düzenleme talebinde bulunduğunuzda, asistan projenizin haritasından çalışır ve düzenlediğiniz bölüm, makrolarınızı tanımlayan giriş bölümü veya alıntı sorusunun arkasındaki ".bib" dosyası gibi istekle ilgili dosyaları okur. Bu bağlam, gerçek Şekil 3'ünüz hakkında "Şekil 3'ün neden bir sonraki sayfaya kaydığını" yanıtlayabilmesinin ve düzenlemelerinin neden belgenizin halihazırda kullandığı gösterim ve komutlarla eşleşme eğiliminde olduğunun nedenidir.

## Aniden gerçekleşen düzenlemeler değil, incelediğiniz düzenlemeler

Asistan hiçbir zaman doğrudan dosyalarınıza yazmaz. Kaldırılan satırlar kırmızı ve eklenen satırlar yeşil renkte olacak şekilde değişiklikleri bir fark olarak önerir ve siz her birini kabul eder veya reddedersiniz. Kabul edilen herhangi bir değişiklik uygulanmadan önce Oleafly bir Git kontrol noktası kaydeder, böylece düzenlemeden önceki durum her zaman [Git geçmişinde](/docs/git-history/) bir adım uzakta olur. Bir dosyanın silinmesi ayrı bir işlemdir ve asistanın yaptığı her ne olursa olsun, her zaman açık onayınızı gerektirir.

## Derleyici ile döngüyü kapatmak

Asistan yapının yanında yaşadığı için kendi çalışmasını kontrol edebilir. Bir düzenlemeden sonra bir derlemeyi tetikleyebilir, günlüğü okuyabilir ve değişikliğin bir hatayı düzeltmesi gerekiyorsa, bu hatanın giderilip giderilmediğini kontrol edebilir. Ayrıca derlenmiş PDF'nin metnini de okuyabilir, böylece istenen değişikliğin çıktıda gerçekten göründüğünü doğrulayabilir. Modeller hâlâ yanlış LaTeX üretiyor; bu nedenle kabul ettiğinizi okuyun. İşin iyi tarafı, hatalı önerilerin daha sonra sizin tarafınızdan değil, döngünün içinde yakalanıp düzeltilme eğiliminde olmasıdır.

[Chat](/docs/ai-chat/) ve [satır içi düzenleme](/docs/ai-inline-edit/) için günlük mekanikler dokümanlarda mevcuttur ve [Oleafly'de bir hafta yazma](/learn/oleafly-workflow/) asistanın tam bir yazma döngüsünde nereye uyduğunu gösterir.